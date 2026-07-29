import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-full",
  {
    variants: {
      variant: {
        default:
          "bg-[#4a1b0c] text-[#fbfaf8] hover:bg-[#381409] shadow-none border border-[#4a1b0c]",
        destructive:
          "bg-red-800 text-white hover:bg-red-900 border border-red-800",
        outline:
          "border border-[#ece9e3] dark:border-[#33312c] bg-white dark:bg-zinc-900 text-[#2c2c2a] dark:text-[#fbfaf8] hover:bg-[#f0ece4] dark:hover:bg-zinc-800",
        secondary:
          "bg-[#f0ece4] dark:bg-zinc-800 text-[#2c2c2a] dark:text-[#fbfaf8] hover:bg-[#e8e3d8] border border-transparent",
        ghost: "hover:bg-[#f0ece4] dark:hover:bg-zinc-800 text-[#2c2c2a] dark:text-[#fbfaf8]",
        link: "text-[#2c2c2a] dark:text-[#fbfaf8] underline-offset-4 hover:underline p-0 h-auto",
        gradient: "bg-[#4a1b0c] text-[#fbfaf8] hover:bg-[#381409] font-medium border border-[#4a1b0c]",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-7 px-3 text-[11px]",
        lg: "h-10 px-5 text-sm",
        icon: "h-8 w-8 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
