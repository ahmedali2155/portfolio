import { cn } from "@/lib/utils";

interface BadgeProps {
  children: string;
  className?: string;
}

/** A small rounded pill used for technology tags and status labels. */
export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border-subtle bg-surface-card px-3 py-1 text-xs font-medium text-text-secondary font-mono",
        className
      )}
    >
      {children}
    </span>
  );
}
