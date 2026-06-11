import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-pill font-heading font-semibold leading-none whitespace-nowrap",
  {
    variants: {
      tone: {
        green: "bg-sprout-100 text-sprout-800",
        sage: "bg-sage-100 text-sage-800",
        gold: "bg-gold-100 text-gold-800",
        terra: "bg-terra-100 text-terra-700",
        neutral: "bg-neutral-150 text-neutral-700",
        cream: "bg-cream text-earth",
      },
      size: {
        sm: "text-[11px] px-2.5 py-1",
        md: "text-[12.5px] px-3 py-1.5",
      },
      solid: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      { tone: "green", solid: true, className: "bg-sprout-700 text-white" },
      { tone: "gold", solid: true, className: "bg-gold-500 text-white" },
      { tone: "terra", solid: true, className: "bg-terra-500 text-white" },
      { tone: "sage", solid: true, className: "bg-sage-700 text-white" },
    ],
    defaultVariants: {
      tone: "green",
      size: "md",
      solid: false,
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
}

export function Badge({ className, tone, size, solid, dot, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ tone, size, solid }), className)} {...props}>
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />}
      {children}
    </span>
  );
}
