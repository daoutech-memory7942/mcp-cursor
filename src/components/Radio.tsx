import React, { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  name?: string;
  value?: string;
}

const RadioDot = ({ disabled }: { disabled?: boolean }) => (
  <div
    className={cn(
      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-200",
      disabled ? "bg-control-icon-disabled" : "bg-control-icon-primary",
      "w-2 h-2"
    )}
  />
);

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label = "라디오버튼", checked = false, onChange, disabled, className, onFocus, onBlur, name, value, ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled && onChange) {
        onChange(e.target.checked);
      }
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (!disabled) {
        setIsHovered(true);
      }
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsHovered(false);
      onBlur?.(e);
    };

    return (
      <label
        className={cn(
          "content-stretch flex gap-[var(--padding-3)] items-center relative cursor-pointer",
          disabled && "cursor-not-allowed",
          className
        )}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={cn(
            "shrink-0 size-4 relative rounded-full transition-colors duration-200",
            checked
              ? disabled
                ? "bg-control-bg-disabled-checked border border-control-border-level1-hover border-solid"
                : "bg-control-bg-normal border border-control-border-primary border-solid"
              : disabled
              ? "bg-control-bg-disabled border border-control-border-level1-hover border-solid"
              : isHovered
              ? "bg-control-bg-normal border border-control-border-level1-hover border-solid"
              : "bg-control-bg-normal border border-control-border-level1 border-solid"
          )}
          data-name="radio"
        >
          <input
            ref={ref}
            type="radio"
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            name={name}
            value={value}
            className="sr-only peer"
            {...props}
          />
          {checked && <RadioDot disabled={disabled} />}
        </div>
        {label && (
          <span
            className={cn(
              "font-pretendard text-typo-body-medium-regular leading-normal not-italic overflow-hidden relative shrink-0 text-ellipsis",
              disabled ? "text-text-neutral-disabled" : "text-text-neutral-base"
            )}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);

Radio.displayName = "Radio";

export default Radio;
