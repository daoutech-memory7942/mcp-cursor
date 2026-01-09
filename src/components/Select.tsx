import React, { useState, useRef, useEffect } from 'react';

export type SelectState = 'normal' | 'hover';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  state?: SelectState;
  options?: SelectOption[];
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

// Chevron down icon component
const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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

export default function Select({
  state = 'normal',
  options = [],
  value,
  placeholder = '셀렉트',
  onChange,
  disabled = false,
  className = '',
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [internalState, setInternalState] = useState<SelectState>('normal');
  const selectRef = useRef<HTMLDivElement>(null);

  // Use controlled state if provided, otherwise use internal state
  const currentState = state !== 'normal' ? state : internalState;
  const selectedOption = options.find(opt => opt.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setInternalState('normal');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      setInternalState('normal');
    }
  };

  const handleSelect = (optionValue: string) => {
    if (onChange) {
      onChange(optionValue);
    }
    setIsOpen(false);
    setInternalState('normal');
  };

  const handleMouseEnter = () => {
    if (!disabled && !isOpen && state === 'normal') {
      setInternalState('hover');
    }
  };

  const handleMouseLeave = () => {
    if (!isOpen && state === 'normal') {
      setInternalState('normal');
    }
  };

  // Border colors based on state
  const getBorderColor = () => {
    if (disabled) {
      return 'border-[#c9d5e1]';
    }
    if (currentState === 'hover' || isOpen) {
      return 'border-[#a7b9cc]';
    }
    return 'border-[#c9d5e1]';
  };

  return (
    <div className={`relative ${className}`} ref={selectRef}>
      <div
        className={`
          bg-white border border-solid content-stretch flex items-center justify-center
          overflow-clip px-2 py-1.5 relative rounded-md w-full
          ${getBorderColor()}
          ${disabled ? 'bg-[#f5f7fa] cursor-not-allowed' : 'cursor-pointer'}
          transition-colors duration-200
        `}
        onClick={handleToggle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-disabled={disabled}
      >
        <p
          className={`
            flex-1 font-normal leading-[1.6] min-h-px min-w-px
            not-italic overflow-ellipsis overflow-hidden relative shrink-0
            text-sm whitespace-nowrap
            ${disabled ? 'text-[#a7b9cc]' : 'text-[#2f353c]'}
          `}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </p>
        <div
          className="relative shrink-0 size-5 flex items-center justify-center"
          data-name="icon"
        >
          <ChevronIcon
            className={`
              transition-transform duration-200
              ${isOpen ? 'rotate-180' : ''}
              ${disabled ? 'text-[#a7b9cc]' : 'text-[#2f353c]'}
            `}
          />
        </div>
      </div>

      {/* Dropdown menu */}
      {isOpen && !disabled && options.length > 0 && (
        <div
          className="absolute z-50 mt-1 w-full bg-white border border-[#c9d5e1] rounded-md shadow-lg max-h-60 overflow-auto"
          role="listbox"
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={`
                px-2 py-1.5 cursor-pointer text-sm
                ${value === option.value ? 'bg-[#e7edf4] text-[#08a7bf]' : 'text-[#2f353c]'}
                hover:bg-[#e7edf4] transition-colors duration-150
              `}
              onClick={() => handleSelect(option.value)}
              role="option"
              aria-selected={value === option.value}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
