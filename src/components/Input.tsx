import React, { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils/cn";

export type InputState = "normal" | "hover" | "error";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onFocus" | "onBlur"> {
  state?: InputState;
  errorMessage?: string;
  onStateChange?: (state: InputState) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      state: controlledState,
      errorMessage,
      onStateChange,
      className,
      onFocus,
      onBlur,
      placeholder = "텍스트를 입력해주세요.",
      disabled,
      ...props
    },
    ref
  ) => {
    const [internalState, setInternalState] = React.useState<InputState>("normal");
    const isControlled = controlledState !== undefined;
    const currentState = isControlled ? controlledState : internalState;

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalState("hover");
      }
      if (onStateChange) {
        onStateChange("hover");
      }
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalState("normal");
      }
      if (onStateChange) {
        onStateChange("normal");
      }
      onBlur?.(e);
    };

    const hasError = currentState === "error";
    const showError = hasError && errorMessage;

    return (
      <div
        className={cn(
          "content-stretch flex flex-col items-start relative w-full",
          showError ? "gap-[var(--padding-2)]" : "h-[var(--height-5)]"
        )}
      >
        <div
          className={cn(
            "bg-input-bg-base border border-solid content-stretch flex h-[var(--height-5)] items-center overflow-clip px-[var(--padding-4)] relative rounded-medium shrink-0 w-full transition-colors",
            hasError
              ? "border-input-border-error"
              : currentState === "hover"
              ? "border-input-border-hover"
              : "border-input-border-base",
            disabled && "bg-input-bg-disabled cursor-not-allowed",
            className
          )}
          data-name="form"
        >
          <input
            ref={ref}
            type="text"
            placeholder={placeholder}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={cn(
              "flex-1 font-pretendard text-typo-body-medium-regular leading-normal min-h-px min-w-px not-italic overflow-hidden relative bg-transparent border-0 outline-0",
              "text-input-text-normal placeholder:text-input-text-disabled",
              disabled && "text-input-text-disabled cursor-not-allowed"
            )}
            {...props}
          />
        </div>
        {showError && (
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="vali_msg">
            <p className="font-pretendard text-typo-body-medium-regular leading-normal not-italic relative shrink-0 text-input-text-error">
              {errorMessage}
            </p>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
