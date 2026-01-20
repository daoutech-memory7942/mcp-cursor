import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils/cn";

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ label = "토글버튼", checked = false, onChange, disabled, className, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled && onChange) {
        onChange(e.target.checked);
      }
    };

    return (
      <label
        className={cn(
          "content-stretch flex gap-[var(--padding-3)] items-center relative cursor-pointer",
          disabled && "cursor-not-allowed",
          className
        )}
      >
        <div className="relative shrink-0 w-8 h-5" data-name="toggle">
          <input
            ref={ref}
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            className="sr-only peer"
            {...props}
          />
          {/* Track */}
          <div
            className={cn(
              "absolute inset-0 rounded-full transition-colors duration-200",
              checked
                ? disabled
                  ? "bg-toggle-bg-disabled-checked"
                  : "bg-toggle-bg-primary"
                : disabled
                ? "bg-toggle-bg-disabled"
                : "bg-toggle-bg-normal"
            )}
          />
          {/* Thumb */}
          <div
            className={cn(
              "absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-200 shadow-sm",
              checked ? "translate-x-[14px]" : "translate-x-0.5"
            )}
          />
        </div>
        {label && (
          <span
            className={cn(
              "font-pretendard text-typo-body-medium-regular leading-normal relative shrink-0 overflow-hidden text-ellipsis",
              disabled ? "text-toggle-text-disabled" : "text-toggle-text-normal"
            )}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);

Toggle.displayName = "Toggle";

export default Toggle;
