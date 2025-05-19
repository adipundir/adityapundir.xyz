import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CardProps = React.ComponentProps<typeof Card>;
type CardHeaderProps = React.ComponentProps<typeof CardHeader>;
type CardContentProps = React.ComponentProps<typeof CardContent>;

interface MobileOptimizedCardProps extends Omit<CardProps, 'title'> {
  title: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  headerClassName?: string;
  contentClassName?: string;
  headerProps?: Omit<CardHeaderProps, 'className'>;
  contentProps?: Omit<CardContentProps, 'className'>;
}

export function MobileOptimizedCard({
  title,
  description,
  children,
  className,
  headerClassName,
  contentClassName,
  headerProps,
  contentProps,
  ...props
}: MobileOptimizedCardProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader className={cn("md:block hidden", headerClassName)} {...headerProps}>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className={cn("md:pt-0", contentClassName)} {...contentProps}>
        {children}
      </CardContent>
    </Card>
  );
} 