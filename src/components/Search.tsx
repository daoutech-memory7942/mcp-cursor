import React from 'react';

export type SearchState = 'normal' | 'hover';

export interface SearchProps {
  state?: SearchState;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onSearch?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
}

// Search icon component
const SearchIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 14L11.1 11.1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Search({
  state = 'normal',
  placeholder = '검색어를 입력해주세요.',
  value,
  onChange,
  onFocus,
  onBlur,
  onSearch,
  disabled = false,
  className = '',
  inputClassName = '',
}: SearchProps) {
  const [internalState, setInternalState] = React.useState<SearchState>('normal');
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Use controlled state if provided, otherwise use internal state
  const currentState = state !== 'normal' ? state : internalState;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (state === 'normal') {
      setInternalState('hover');
    }
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (state === 'normal') {
      setInternalState('normal');
    }
    if (onBlur) {
      onBlur(e);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch && value) {
      onSearch(value);
    }
  };

  // Border colors based on state
  const getBorderColor = () => {
    if (disabled) {
      return 'border-[#c9d5e1]';
    }
    if (currentState === 'hover') {
      return 'border-[#a7b9cc]';
    }
    return 'border-[#c9d5e1]';
  };

  const iconColor = disabled ? 'text-[#a7b9cc]' : 'text-[#2f353c]';

  return (
    <div
      className={`
        bg-white border border-solid content-stretch flex gap-1
        h-8 items-center justify-end overflow-clip px-2 py-0
        relative rounded-md w-full
        ${getBorderColor()}
        ${disabled ? 'bg-[#f5f7fa] cursor-not-allowed' : 'cursor-text'}
        transition-colors duration-200
        ${className}
      `}
    >
      <div
        className="relative shrink-0 size-4 flex items-center justify-center"
        data-name="icon-search"
      >
        <SearchIcon className={iconColor} />
      </div>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder={placeholder}
        className={`
          flex-1 font-normal leading-[1.6] min-h-px min-w-px
          not-italic overflow-ellipsis overflow-hidden relative shrink-0
          text-sm text-[#2f353c] whitespace-nowrap
          bg-transparent border-0 outline-none
          placeholder:text-[#a7b9cc]
          ${disabled ? 'text-[#a7b9cc] cursor-not-allowed' : ''}
          ${inputClassName}
        `}
      />
    </div>
  );
}
