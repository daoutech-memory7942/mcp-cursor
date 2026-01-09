import React from 'react';

export type CheckboxState = 'normal' | 'check' | 'hover';

export interface CheckboxProps {
  state?: CheckboxState;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: boolean;
  labelText?: string;
  className?: string;
}

// Checkmark icon component
const CheckmarkIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 8L6 11L13 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Checkbox({
  state,
  disabled = false,
  checked = false,
  onChange,
  label = true,
  labelText = '체크박스',
  className = '',
}: CheckboxProps) {
  // Determine actual state - if checked prop is provided, use it; otherwise use state prop
  const isChecked = state === 'check' || checked;
  const isHover = state === 'hover' && !disabled && !isChecked;
  const isNormal = state === 'normal' || (!state && !isHover);
  const [internalHover, setInternalHover] = React.useState(false);

  // Use controlled state if provided, otherwise use internal hover state
  const currentState = state || (internalHover ? 'hover' : 'normal');

  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(!isChecked);
    }
  };

  const handleMouseEnter = () => {
    if (!disabled && !isChecked) {
      setInternalHover(true);
    }
  };

  const handleMouseLeave = () => {
    setInternalHover(false);
  };

  // Get checkbox styles based on state
  const getCheckboxStyles = () => {
    if (disabled) {
      if (isChecked) {
        // Disabled + Checked: light blue-gray background
        return {
          bg: 'bg-[#bdcbd9]',
          border: 'border-[#a7b9cc]',
          checkmarkColor: 'text-white',
        };
      } else {
        // Disabled + Unchecked: light gray background
        return {
          bg: 'bg-[#e7edf4]',
          border: 'border-[#a7b9cc]',
          checkmarkColor: '',
        };
      }
    }

    if (isChecked) {
      // Checked + Not Disabled: teal background
      return {
        bg: 'bg-[#08a7bf]',
        border: 'border-[#08a7bf]',
        checkmarkColor: 'text-white',
      };
    }

    // Unchecked states
    if (currentState === 'hover' || isHover) {
      return {
        bg: 'bg-white',
        border: 'border-[#a7b9cc]',
        checkmarkColor: '',
      };
    }

    // Normal unchecked
    return {
      bg: 'bg-white',
      border: 'border-[#c9d5e1]',
      checkmarkColor: '',
    };
  };

  const styles = getCheckboxStyles();
  const textColor = disabled ? 'text-[#a7b9cc]' : 'text-[#2f353c]';

  return (
    <div
      className={`content-stretch flex gap-1.5 items-center relative ${className}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`
          shrink-0 size-4 rounded border border-solid
          ${styles.bg} ${styles.border}
          ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
          transition-colors duration-200
          flex items-center justify-center
        `}
        data-name="checkbox"
        role="checkbox"
        aria-checked={isChecked}
        aria-disabled={disabled}
      >
        {isChecked && (
          <CheckmarkIcon className={`${styles.checkmarkColor} w-full h-full`} />
        )}
      </div>
      
      {label && (
        <p
          className={`
            font-normal leading-[1.6] not-italic overflow-ellipsis overflow-hidden
            relative shrink-0 text-sm
            ${textColor}
            ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
          `}
        >
          {labelText}
        </p>
      )}
    </div>
  );
}
