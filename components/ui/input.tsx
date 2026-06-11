import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "h-12 w-full rounded-pill bg-white border border-stone px-5",
        "font-sans text-[15px] text-ink placeholder:text-ink-muted",
        "transition-shadow duration-150 ease-out",
        "focus:outline-none focus:ring-4 focus:ring-sprout-500/25 focus:border-sprout-400",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
