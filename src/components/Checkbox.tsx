import React, { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckIcon = ({ disabled }: { disabled?: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0"
  >
    <path
      d="M4 8L7 11L12 5"
      stroke={disabled ? "#bdcbd9" : "white"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label = "체크박스", checked = false, onChange, disabled, className, onFocus, onBlur, ...props }, ref) => {
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
            "shrink-0 size-4 relative rounded-small transition-colors duration-200",
            checked
              ? disabled
                ? "bg-control-bg-disabled-checked"
                : "bg-control-bg-primary"
              : disabled
              ? "bg-control-bg-disabled"
              : "bg-control-bg-normal",
            !checked &&
              !disabled &&
              (isHovered
                ? "border border-control-border-level1-hover border-solid"
                : "border border-control-border-level1 border-solid"),
            checked && "border-0"
          )}
          data-name="checkbox"
        >
          <input
            ref={ref}
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="sr-only peer"
            {...props}
          />
          {checked && (
            <div className="absolute inset-0 flex items-center justify-center">
              <CheckIcon disabled={disabled} />
            </div>
          )}
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

Checkbox.displayName = "Checkbox";

export default Checkbox;
