"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { chatWithMe } from "@/app/actions/chat"
import { sanitizeUserMessage } from "@/lib/chat-security"
import { parseLinks } from "@/lib/parse-links"

// Timestamp component that handles client-side formatting
const MessageTimestamp = ({ timestamp }: { timestamp: Date }) => {
  const [formattedTime, setFormattedTime] = useState<string>("");
  
  useEffect(() => {
    // Format time on client-side only to avoid hydration mismatch
    setFormattedTime(
      timestamp.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true
      })
    );
  }, [timestamp]);
  
  return <span>{formattedTime}</span>;
};

type Message = {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: "1",
    content:
      "Hi there! I'm Aditya. Feel free to ask me anything about my experience, projects, or background!",
    role: "assistant",
    timestamp: new Date(),
  },
]

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    // Re-focus the input box after messages are updated
    if (!isLoading) {
      inputRef.current?.focus()
    }
  }, [messages, isLoading])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    // Pre-sanitize the input on the client side
    const sanitizedInput = sanitizeUserMessage(input);

    // Add user message with sanitized input
    const userMessage: Message = {
      id: Date.now().toString(),
      content: sanitizedInput,
      role: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Prepare messages for the server action
      const messagesForAPI = messages.concat(userMessage).map(msg => ({
        content: msg.content,
        role: msg.role
      }));

      // Call the server action
      const response = await chatWithMe(messagesForAPI);

      // Add AI response to the chat
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: String(response.content),
        role: "assistant",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error sending message:", error);
      
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I'm having trouble responding right now. Please try again later.",
        role: "assistant",
        timestamp: new Date(),
      }
      
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex h-full flex-col ">
      <div className="mb-4 hidden md:block">
        <h1 className="text-2xl font-bold">Chat with Me</h1>
        <p className="text-muted-foreground">Ask me anything about my experience, projects, or background</p>
      </div>

      <div className="flex-1 overflow-y-auto rounded-md border p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn("flex items-start gap-3", message.role === "user" ? "justify-end" : "justify-start")}
            >
              {message.role === "assistant" && (
                <Avatar className="mt-0.5 h-8 w-8">
                  <AvatarImage src="/aditya.jpg" alt="AI" />
                  <AvatarFallback>AP</AvatarFallback>
                </Avatar>
              )}

              <div
                className={cn(
                  "rounded-lg px-4 py-2 max-w-[80%]",
                  message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted",
                )}
              >
                <p>{message.role === "assistant" ? parseLinks(message.content) : message.content}</p>
                <div className="mt-1 text-xs opacity-70">
                  <MessageTimestamp timestamp={message.timestamp} />
                </div>
              </div>

              {message.role === "user" && (
                <Avatar className="mt-0.5 h-8 w-8">
                  <AvatarImage src="/user.png" alt="User" />
                  <AvatarFallback>ME</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start gap-3">
              <Avatar className="mt-0.5 h-8 w-8">
                <AvatarImage src="/aditya.jpg" alt="AI" />
                <AvatarFallback>AP</AvatarFallback>
              </Avatar>
              <div className="rounded-lg bg-muted px-4 py-2">
                <div className="flex space-x-2">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-400"></div>
                  <div
                    className="h-2 w-2 animate-bounce rounded-full bg-zinc-400"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="h-2 w-2 animate-bounce rounded-full bg-zinc-400"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      <form onSubmit={handleSendMessage} className="mt-8 flex gap-2">
        <Input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={isLoading}
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading || !input.trim()}>
          <Send className="h-4 w-4" />
          <span className="sr-only">Send message</span>
        </Button>
      </form>
    </div>
  )
}
