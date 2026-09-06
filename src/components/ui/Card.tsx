import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-card border border-border-subtle bg-surface-card p-8 transition-all duration-300 hover:border-border-glass hover:-translate-y-1",
        className
      )}
      {...props}
    />
  );
}
