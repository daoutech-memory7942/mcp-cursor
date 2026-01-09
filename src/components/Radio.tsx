import React from 'react';

export type RadioState = 'normal' | 'check' | 'hover';

export interface RadioProps {
  state?: RadioState;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  name?: string;
  value?: string;
  label?: boolean;
  labelText?: string;
  className?: string;
}

export default function Radio({
  state,
  disabled = false,
  checked = false,
  onChange,
  name,
  value,
  label = true,
  labelText = '라디오버튼',
  className = '',
}: RadioProps) {
  // Determine actual state - if checked prop is provided, use it; otherwise use state prop
  const isChecked = state === 'check' || checked;
  const isHover = state === 'hover' && !disabled && !isChecked;
  const [internalHover, setInternalHover] = React.useState(false);

  // Use controlled state if provided, otherwise use internal hover state
  const currentState = state || (internalHover ? 'hover' : 'normal');

  const handleClick = () => {
    if (!disabled && onChange && !isChecked) {
      onChange(true);
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

  // Get radio styles based on state
  const getRadioStyles = () => {
    if (disabled) {
      if (isChecked) {
        // Disabled + Checked: light blue-gray center dot
        return {
          bg: 'bg-[#e7edf4]',
          border: 'border-[#a7b9cc]',
          dotColor: 'bg-[#bdcbd9]',
        };
      } else {
        // Disabled + Unchecked: light gray background
        return {
          bg: 'bg-[#e7edf4]',
          border: 'border-[#a7b9cc]',
          dotColor: '',
        };
      }
    }

    if (isChecked) {
      // Checked + Not Disabled: teal border with white center and teal dot
      return {
        bg: 'bg-white',
        border: 'border-[#08a7bf]',
        dotColor: 'bg-[#08a7bf]',
      };
    }

    // Unchecked states
    if (currentState === 'hover' || isHover) {
      return {
        bg: 'bg-white',
        border: 'border-[#a7b9cc]',
        dotColor: '',
      };
    }

    // Normal unchecked
    return {
      bg: 'bg-white',
      border: 'border-[#c9d5e1]',
      dotColor: '',
    };
  };

  const styles = getRadioStyles();
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
          shrink-0 size-4 rounded-full border-2 border-solid
          ${styles.bg} ${styles.border}
          ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
          transition-colors duration-200
          flex items-center justify-center
        `}
        data-name="radio"
        role="radio"
        aria-checked={isChecked}
        aria-disabled={disabled}
      >
        {isChecked && (
          <div
            className={`
              w-2 h-2 rounded-full
              ${styles.dotColor}
              transition-all duration-200
            `}
          />
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
      {name && value && (
        <input
          type="radio"
          name={name}
          value={value}
          checked={isChecked}
          disabled={disabled}
          onChange={() => {}}
          className="sr-only"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
