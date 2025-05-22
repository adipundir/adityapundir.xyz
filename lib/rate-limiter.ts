// Rate limiter for API requests
// This is a simple in-memory rate limiter that tracks requests per IP

type RateLimitRecord = {
  count: number;
  resetAt: number;
};

// In-memory store for rate limits
// In a production environment, consider using Redis or a database
const ipLimitStore: Map<string, RateLimitRecord> = new Map();

// Configuration - use environment variables if available, otherwise use defaults
const MAX_REQUESTS_PER_WINDOW = process.env.MAX_CHAT_REQUESTS_PER_WINDOW 
  ? parseInt(process.env.MAX_CHAT_REQUESTS_PER_WINDOW, 10) 
  : 10; // Maximum requests per time window

const WINDOW_DURATION_MS = process.env.CHAT_RATE_LIMIT_WINDOW_MS 
  ? parseInt(process.env.CHAT_RATE_LIMIT_WINDOW_MS, 10) 
  : 60 * 60 * 1000; // 1 hour in milliseconds by default

/**
 * Check if a request from an IP address is rate limited
 * @param ip The IP address to check
 * @returns Object containing whether the request is allowed and remaining requests
 */
export function checkRateLimit(ip: string): { 
  allowed: boolean; 
  remaining: number;
  resetAt: Date | null;
} {
  // Get current time
  const now = Date.now();
  
  // Get or create rate limit record for this IP
  let record = ipLimitStore.get(ip);
  
  // If no record exists or the window has expired, create a new one
  if (!record || record.resetAt < now) {
    record = {
      count: 0,
      resetAt: now + WINDOW_DURATION_MS
    };
    ipLimitStore.set(ip, record);
  }
  
  // Check if the IP has exceeded the rate limit
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: new Date(record.resetAt)
    };
  }
  
  // Increment the request count
  record.count += 1;
  ipLimitStore.set(ip, record);
  
  // Return the result
  return {
    allowed: true,
    remaining: MAX_REQUESTS_PER_WINDOW - record.count,
    resetAt: new Date(record.resetAt)
  };
}

/**
 * Clean up expired rate limit records
 * This should be called periodically to prevent memory leaks
 */
export function cleanupRateLimits(): void {
  const now = Date.now();
  
  // Remove expired records
  for (const [ip, record] of ipLimitStore.entries()) {
    if (record.resetAt < now) {
      ipLimitStore.delete(ip);
    }
  }
}

// Set up automatic cleanup every hour
if (typeof window === 'undefined') { // Only run on server
  setInterval(cleanupRateLimits, WINDOW_DURATION_MS);
} 