import React from "react";
import { cn } from "../utils/cn";

export type ToastType = "success" | "fail";

export interface ToastProps {
  type?: ToastType;
  message: string;
  id?: string;
  onClose?: () => void;
  duration?: number;
  className?: string;
}

const SuccessIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
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

const FailIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <circle cx="10" cy="10" r="10" fill="white" />
    <path
      d="M7 7L13 13M13 7L7 13"
      stroke="#dc3545"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Toast: React.FC<ToastProps> = ({
  type = "success",
  message,
  className,
  onClose,
  duration,
}) => {
  React.useEffect(() => {
    if (duration && duration > 0 && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);
  
  const isSuccess = type === "success";

  return (
    <div
      className={cn(
        "border border-solid content-stretch flex gap-[var(--padding-2)] items-center justify-end overflow-clip px-[var(--padding-6)] py-[var(--padding-5)] relative rounded-xlarge w-[320px]",
        isSuccess
          ? "bg-bg-status-positive border-border-status-positive"
          : "bg-bg-status-negative border-border-status-negative",
        className
      )}
      data-name="toast"
    >
      {isSuccess ? (
        <div className="relative shrink-0 size-5" data-name="circle-check-filled">
          <SuccessIcon />
        </div>
      ) : (
        <div className="relative shrink-0 size-5" data-name="alert-circle-filled">
          <FailIcon />
        </div>
      )}
      <p
        className={cn(
          "flex-1 font-pretendard text-typo-body-large-regular leading-tight min-h-px min-w-px not-italic overflow-hidden relative text-text-neutral-white text-ellipsis whitespace-nowrap"
        )}
      >
        {message}
      </p>
    </div>
  );
};

Toast.displayName = "Toast";

export default Toast;
