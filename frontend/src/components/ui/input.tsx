import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-full border border-[#ece9e3] dark:border-[#33312c] bg-white dark:bg-zinc-900 px-3.5 py-1 text-xs text-[#2c2c2a] dark:text-[#fbfaf8] placeholder:text-[#8a8880] focus-visible:outline-none focus-visible:border-[#4a1b0c] disabled:cursor-not-allowed disabled:opacity-50 transition-colors shadow-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
