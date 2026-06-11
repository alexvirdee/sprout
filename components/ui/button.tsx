import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill",
    "font-heading font-semibold tracking-tight",
    "transition-[background,transform,box-shadow] duration-150 ease-out",
    "active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50",
    "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sprout-500/30",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-sprout-500 text-white shadow-brand hover:bg-sprout-600",
        secondary:
          "bg-white text-sprout-700 border-[1.5px] border-sprout-300 shadow-xs hover:bg-sprout-50",
        ghost:
          "bg-transparent text-sprout-700 hover:bg-sprout-50",
        gold:
          "bg-gold-400 text-earth shadow-gold hover:bg-gold-500",
        soft:
          "bg-sprout-50 text-sprout-700 hover:bg-sprout-100",
        cream:
          "bg-white text-earth hover:bg-cream",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-[15px]",
        lg: "h-[54px] px-7 text-[17px]",
        icon: "h-11 w-11",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
