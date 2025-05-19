import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";

// Regular expression to match URLs in text
const URL_REGEX = /(https?:\/\/[^\s]+)/g;

/**
 * Parse a text message and convert URLs to React elements with external link icons
 * @param text The message text to parse
 * @returns An array of React nodes with URLs converted to links with icons
 */
export function parseLinks(text: string): ReactNode[] {
  if (!text) return [text];
  
  const parts = [];
  let lastIndex = 0;
  let match;
  
  // Use regex with exec to iterate through all matches
  while ((match = URL_REGEX.exec(text)) !== null) {
    // Add text between last match and current match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    
    // Add the URL as a link with icon
    const url = match[0];
    parts.push(
      <a 
        key={match.index}
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline inline-flex items-center gap-1"
      >
        <span className="break-all">{url}</span>
        <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" />
      </a>
    );
    
    lastIndex = match.index + url.length;
  }
  
  // Add any remaining text after the last match
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  
  // If no URLs were found, return the original text
  return parts.length > 0 ? parts : [text];
} 