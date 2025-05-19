// Security utilities for chat functionality

/**
 * Check if a message contains potential prompt injection attempts
 * or other unsafe content
 */
export function sanitizeUserMessage(message: string): string {
  // Convert to lowercase for easier pattern matching
  const lowercaseMessage = message.toLowerCase();

  // List of patterns that might indicate prompt injection attempts
  const promptInjectionPatterns = [
    "ignore previous instructions",
    "ignore all instructions",
    "forget your instructions",
    "disregard your instructions",
    "override your instructions",
    "you are not aditya",
    "stop acting as aditya",
    "new system prompt",
    "system prompt:",
    "system message:",
    "you're an ai",
    "as an ai",
    "as an llm",
    "you are an llm",
    "you're a language model",
    "you are a language model",
    "change your behavior",
  ];

  // Check if the message contains any injection patterns
  if (promptInjectionPatterns.some(pattern => lowercaseMessage.includes(pattern))) {
    // Return a sanitized message
    return "I'd like to learn more about you and your work.";
  }

  // Perform additional sanitization
  // 1. Remove any markdown code block syntax that might be used to format system prompts
  let sanitized = message.replace(/```(system|instructions|prompt)[\s\S]*?```/gi, "[Content removed for security]");
  
  // 2. Remove anything that looks like a system prompt format
  sanitized = sanitized.replace(/system:[\s\S]*?user:/gi, "");
  
  // 3. Remove any attempt to use XML-like tags to escape
  sanitized = sanitized.replace(/<(system|instructions|prompt)[^>]*>[\s\S]*?<\/(system|instructions|prompt)>/gi, 
    "[Content removed for security]");

  return sanitized;
}

/**
 * Analyzes the chat history for suspicious patterns
 * that might indicate a multi-message prompt injection attack
 */
export function analyzeConversationSafety(messages: Array<{ content: string; role: string }>): boolean {
  // Count how many messages contain potentially suspicious content
  const suspiciousMessageCount = messages
    .filter(msg => msg.role === "user")
    .filter(msg => {
      const lowercaseContent = msg.content.toLowerCase();
      return (
        lowercaseContent.includes("system") ||
        lowercaseContent.includes("instruction") ||
        lowercaseContent.includes("prompt") ||
        lowercaseContent.includes("forget") ||
        lowercaseContent.includes("ignore") ||
        lowercaseContent.includes("override")
      );
    }).length;

  // If there are multiple suspicious messages, this could be an attempt
  // at a multi-message prompt injection attack
  return suspiciousMessageCount < 2;
} 