import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  className?: string;
}

export function SectionHeader({ icon: Icon, title, className }: SectionHeaderProps) {
  return (
    <div className={cn("hidden md:flex items-center gap-3", className)}>
      <Icon className="h-6 w-6 text-primary" />
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
} 