import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind class names safely, resolving conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Returns true only when the given value is a non-empty, meaningful string/link. */
export function hasValue(value?: string | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}
