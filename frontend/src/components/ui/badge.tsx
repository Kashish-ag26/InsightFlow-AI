import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center text-[11px] font-medium rounded-full px-2.5 py-0.5 transition-colors font-sans",
  {
    variants: {
      variant: {
        default: "bg-[#faece7] text-[#4a1b0c] dark:bg-zinc-800 dark:text-[#fbfaf8]",
        secondary: "bg-[#f0ece4] text-[#2c2c2a] dark:bg-zinc-800 dark:text-[#fbfaf8]",
        destructive: "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300",
        outline: "border border-[#ece9e3] text-[#8a8880] bg-white",
        high: "bg-[#faece7] text-[#4a1b0c] font-semibold border border-[#f5d9d0]",
        medium: "bg-[#f0ece4] text-[#2c2c2a]",
        low: "bg-[#f5f4f0] text-[#8a8880]",
        cyan: "bg-[#faece7] text-[#4a1b0c]",
        purple: "bg-[#faece7] text-[#4a1b0c]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
