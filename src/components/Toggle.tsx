import React from 'react';

export type ToggleState = 'normal' | 'disabled';

export interface ToggleProps {
  label?: boolean;
  state?: ToggleState;
  toggle?: boolean;
  onChange?: (checked: boolean) => void;
  labelText?: string;
  className?: string;
}

export default function Toggle({
  label = true,
  state = 'normal',
  toggle = false,
  onChange,
  labelText = '토글버튼',
  className = '',
}: ToggleProps) {
  const isDisabled = state === 'disabled';
  const isToggled = toggle;

  const handleClick = () => {
    if (!isDisabled && onChange) {
      onChange(!toggle);
    }
  };

  // Track colors based on state and toggle
  const getTrackColor = () => {
    if (isDisabled) {
      // Disabled + On: light blue-gray, Disabled + Off: very light gray (almost white)
      return isToggled ? 'bg-[#bdcbd9]' : 'bg-[#f5f7fa]';
    }
    // Normal + On: teal, Normal + Off: light gray
    return isToggled ? 'bg-[#08a7bf]' : 'bg-[#e7edf4]';
  };

  // Text color based on state
  const getTextColor = () => {
    return isDisabled ? 'text-[#a7b9cc]' : 'text-[#2f353c]';
  };

  return (
    <div className={`content-stretch flex gap-1.5 items-center relative ${className}`}>
      <button
        type="button"
        role="switch"
        aria-checked={isToggled}
        aria-disabled={isDisabled}
        onClick={handleClick}
        disabled={isDisabled}
        className={`
          h-5 relative shrink-0 w-8 rounded-full transition-all duration-200 ease-in-out
          ${getTrackColor()}
          ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}
          focus:outline-none focus:ring-2 focus:ring-[#08a7bf] focus:ring-offset-2
          ${!isDisabled ? 'hover:opacity-90' : ''}
        `}
      >
        {/* Thumb */}
        <span
          className={`
            absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full
            transition-transform duration-200 ease-in-out
            ${isToggled ? 'translate-x-3' : 'translate-x-0'}
            shadow-sm
          `}
        />
      </button>
      
      {label && (
        <p
          className={`
            font-normal leading-[1.6] not-italic overflow-ellipsis overflow-hidden
            relative shrink-0 text-sm
            ${getTextColor()}
          `}
        >
          {labelText}
        </p>
      )}
    </div>
  );
}
