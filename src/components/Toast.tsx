import React from 'react';

export type ToastType = 'success' | 'fail';

export interface ToastProps {
  type?: ToastType;
  message?: string;
  onClose?: () => void;
  className?: string;
}

// Success checkmark icon
const SuccessIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="10" fill="white" />
    <path
      d="M6 10L9 13L14 7"
      stroke="#03c75a"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Error alert icon
const ErrorIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="10" fill="white" />
    <path
      d="M10 6V10"
      stroke="#dc3545"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14H10.01"
      stroke="#dc3545"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Toast({
  type = 'success',
  message,
  onClose,
  className = '',
}: ToastProps) {
  const isSuccess = type === 'success';
  const isFail = type === 'fail';

  // Default messages
  const defaultMessage = isSuccess
    ? '게시글이 정상적으로 등록되었습니다.'
    : '파일 업로드 용량을 초과하였습니다.';

  const displayMessage = message || defaultMessage;

  // Background and border colors
  const getStyles = () => {
    if (isSuccess) {
      return {
        bg: 'bg-[#03c75a]',
        border: 'border-[#03c75a]',
      };
    }
    return {
      bg: 'bg-[#dc3545]',
      border: 'border-[#dc3545]',
    };
  };

  const styles = getStyles();

  return (
    <div
      className={`
        border border-solid content-stretch flex gap-1 items-center justify-end
        overflow-clip px-4 py-3 relative rounded-xl w-[320px]
        ${styles.bg} ${styles.border}
        ${className}
      `}
    >
      {isSuccess && (
        <div
          className="relative shrink-0 size-5 flex items-center justify-center"
          data-name="circle-check-filled"
        >
          <SuccessIcon />
        </div>
      )}
      
      <p
        className={`
          flex-1 font-normal leading-[1.5] min-h-px min-w-px
          not-italic overflow-ellipsis overflow-hidden relative shrink-0
          text-base text-white whitespace-nowrap
        `}
      >
        {displayMessage}
      </p>
      
      {isFail && (
        <div
          className="relative shrink-0 size-5 flex items-center justify-center"
          data-name="alert-circle-filled"
        >
          <ErrorIcon />
        </div>
      )}
    </div>
  );
}
