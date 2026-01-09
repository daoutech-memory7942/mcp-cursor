import React from 'react';

export type InputState = 'normal' | 'hover' | 'error';

export interface InputProps {
  state?: InputState;
  errorMsg?: boolean;
  placeholder?: string;
  errorMessage?: string;
  value?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
}

export default function Input({
  state = 'normal',
  errorMsg = false,
  placeholder = '텍스트를 입력해주세요.',
  errorMessage = '상황에 맞는 메시지를 넣어주세요.',
  value,
  type = 'text',
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  className = '',
  inputClassName = '',
}: InputProps) {
  const isError = state === 'error';
  const isHover = state === 'hover';
  const isNormal = state === 'normal';
  const showErrorMsg = isError && errorMsg;

  // Border colors based on state
  const getBorderColor = () => {
    if (isError) {
      return 'border-[#dc3545]';
    }
    if (isHover) {
      return 'border-[#a7b9cc]';
    }
    return 'border-[#c9d5e1]';
  };

  // Container gap - error state needs gap for error message
  const getContainerGap = () => {
    if (showErrorMsg) {
      return 'gap-1';
    }
    if (isNormal && !errorMsg) {
      return 'gap-1';
    }
    return '';
  };

  return (
    <div
      className={`
        content-stretch flex flex-col items-start relative w-full
        ${getContainerGap()}
        ${showErrorMsg ? 'justify-center' : ''}
        ${className}
      `}
    >
      <div
        className={`
          bg-white border border-solid content-stretch flex h-8 items-center
          overflow-clip px-2 relative rounded-md shrink-0 w-full
          ${getBorderColor()}
          ${isHover && !errorMsg ? 'py-1.5' : 'py-0'}
          ${disabled ? 'bg-[#f5f7fa] cursor-not-allowed' : 'cursor-text'}
          transition-colors duration-200
        `}
        data-name="form"
      >
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
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
      
      {showErrorMsg && (
        <div
          className="content-stretch flex items-start relative shrink-0 w-full"
          data-name="vali_msg"
        >
          <p
            className={`
              font-normal leading-[1.6] not-italic relative shrink-0
              text-[#dc3545] text-sm
            `}
          >
            {errorMessage}
          </p>
        </div>
      )}
    </div>
  );
}
