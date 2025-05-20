import React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <div className={cn("h-full overflow-auto px-4 py-6 md:px-8 md:py-8", className)}>
      {children}
    </div>
  );
} 