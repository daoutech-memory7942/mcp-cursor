import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils/cn";

export type ButtonVariant = "primary" | "normal" | "ghost" | "secondary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, children, disabled, ...props }, ref) => {
    const baseClasses = "content-stretch flex h-[var(--height-5)] items-center overflow-clip px-[var(--padding-5)] relative rounded-medium transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";

    const variantClasses = {
      primary: "bg-btn-bg-primary-base hover:bg-btn-bg-primary-hover disabled:hover:bg-btn-bg-primary-base",
      secondary: "bg-btn-bg-normal-base border border-btn-border-primary hover:bg-btn-bg-normal-hover border-solid disabled:hover:bg-btn-bg-normal-base",
      normal: "bg-btn-bg-normal-base border border-btn-border-normal hover:bg-btn-bg-normal-hover border-solid disabled:hover:bg-btn-bg-normal-base",
      ghost: "bg-btn-bg-normal-base hover:bg-btn-bg-normal-hover disabled:hover:bg-btn-bg-normal-base",
    };

    const textClasses = {
      primary: "text-btn-text-white",
      secondary: "text-btn-text-primary",
      normal: "text-btn-text-normal",
      ghost: "text-btn-text-normal",
    };

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], className)}
        disabled={disabled}
        {...props}
      >
        <span className={cn("font-pretendard text-typo-body-medium-bold leading-normal relative shrink-0", textClasses[variant])}>
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
