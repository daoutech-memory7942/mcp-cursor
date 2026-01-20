import React, { SelectHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils/cn";

export type SelectState = "normal" | "hover";

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onFocus" | "onBlur"> {
  state?: SelectState;
  onStateChange?: (state: SelectState) => void;
  options?: Array<{ value: string; label: string }>;
}

const ChevronDownIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      state: controlledState,
      onStateChange,
      className,
      onFocus,
      onBlur,
      disabled,
      options = [],
      children,
      ...props
    },
    ref
  ) => {
    const [internalState, setInternalState] = React.useState<SelectState>("normal");
    const isControlled = controlledState !== undefined;
    const currentState = isControlled ? controlledState : internalState;

    const handleFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
      if (!isControlled) {
        setInternalState("hover");
      }
      if (onStateChange) {
        onStateChange("hover");
      }
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
      if (!isControlled) {
        setInternalState("normal");
      }
      if (onStateChange) {
        onStateChange("normal");
      }
      onBlur?.(e);
    };

    return (
      <div
        className={cn(
          "bg-bg-neutral-base border border-solid content-stretch flex items-center justify-center overflow-clip px-[var(--padding-4)] h-[var(--height-5)] relative rounded-medium w-full transition-colors",
          currentState === "hover"
            ? "border-border-neutral-level1-hover"
            : "border-border-neutral-level1",
          disabled && "bg-input-bg-disabled cursor-not-allowed",
          className
        )}
        data-name="select"
      >
        <select
          ref={ref}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cn(
            "flex-1 font-pretendard text-typo-body-medium-regular leading-normal min-h-px min-w-px not-italic overflow-hidden relative bg-transparent border-0 outline-0 appearance-none cursor-pointer",
            "text-text-neutral-base",
            disabled && "text-input-text-disabled cursor-not-allowed"
          )}
          {...props}
        >
          {options.length > 0
            ? options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))
            : children}
        </select>
        <div className="relative shrink-0 size-5 pointer-events-none" data-name="icon">
          <ChevronDownIcon />
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
