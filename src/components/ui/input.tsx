import * as React from "react";
import { cn } from "../../lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & {
    error?: boolean;
    icon?: React.ReactNode;
    wrapperClassName?: string;
    heightClassName?: string;
    addonBefore?: React.ReactNode;
    addonAfter?: React.ReactNode;
  }
>(
  (
    {
      className,
      type,

      icon,
      wrapperClassName,
      heightClassName = "h-8",
      addonBefore,
      addonAfter,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn(
          "flex items-stretch w-full relative",
          addonBefore || addonAfter ? "gap-0" : "gap-2",
          wrapperClassName,
          heightClassName,
        )}
      >
        {addonBefore && (
          <div
            className={cn(
              "flex items-center justify-center px-3 bg-muted border border-r-0 border-input rounded-l-[10px] text-muted-foreground text-sm whitespace-nowrap",
            )}
          >
            {addonBefore}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex-1 min-w-0 rounded-[10px] border border-input hover:border-primary-800 focus-visible:border-primary-800 bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm file:font-medium file:text-foreground file:border-0 file:bg-transparent file:text-sm",
            icon && !addonAfter && "pr-10",
            addonBefore && "rounded-l-none",
            addonAfter && "rounded-r-none",
            className,
          )}
          ref={ref}
          {...props}
        />
        {addonAfter && (
          <div
            className={cn(
              "flex items-center justify-center px-3 bg-muted border border-l-0 border-input rounded-r-[10px] text-muted-foreground text-sm whitespace-nowrap",
            )}
          >
            {addonAfter}
          </div>
        )}
        {!addonAfter && icon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-muted-foreground pointer-events-none">
            {icon}
          </span>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
