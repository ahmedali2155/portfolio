import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "text" | "icon";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn font-medium tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent-blue disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-blue text-white hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-blue/20 active:translate-y-0",
  secondary:
    "border border-border-glass bg-surface-card text-text-primary hover:border-accent-blue/50 hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "border border-border-subtle text-text-secondary hover:border-accent-blue/40 hover:text-text-primary",
  text: "text-accent-blue hover:text-accent-cyan px-0",
  icon: "rounded-full border border-border-subtle text-text-secondary hover:text-accent-blue hover:border-accent-blue/50 p-2.5",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  sm: "px-4 py-2 text-sm",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children?: ReactNode;
  className?: string;
}

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps | LinkProps
>(({ variant = "primary", size = "md", className, children, as, ...rest }, ref) => {
  const classes = cn(base, variants[variant], variant !== "icon" && sizes[size], className);

  if (as === "a") {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
