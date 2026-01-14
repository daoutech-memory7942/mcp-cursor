import React, { useState, useCallback, useRef } from 'react';

export type ButtonType = 'primary' | 'normal' | 'ghost' | 'secondary';
export type ButtonState = 'hover' | 'normal';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonHTMLType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  type?: ButtonType;
  state?: ButtonState;
  size?: ButtonSize;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  htmlType?: ButtonHTMLType;
  href?: string;
  target?: string;
  debounceMs?: number;
  throttleMs?: number;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

// Loading spinner component
const LoadingSpinner = ({ className }: { className?: string }) => (
  <svg
    className={`animate-spin ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

export default function Button({
  type = 'primary',
  state = 'normal',
  size = 'medium',
  children = 'Button',
  onClick,
  className = '',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  htmlType = 'button',
  href,
  target,
  debounceMs,
  throttleMs,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
}: ButtonProps) {
  const [internalLoading, setInternalLoading] = useState(false);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const throttleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastClickTimeRef = useRef<number>(0);

  const isDisabled = disabled || loading || internalLoading;

  // Size-based classes
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'h-6 px-2 text-xs';
      case 'large':
        return 'h-10 px-4 text-base';
      case 'medium':
      default:
        return 'h-[32px] px-[12px] text-[14px]';
    }
  };

  // Base classes
  const baseClasses = `content-stretch flex items-center justify-center overflow-clip py-0 relative font-["Pretendard:Medium",sans-serif] leading-[1.6] transition-colors duration-200 ${getSizeClasses()}`;
  
  // Type and state combinations
  const getButtonClasses = () => {
    const classes: string[] = [baseClasses];
    
    // If state is explicitly set to 'hover', use hover styles
    // Otherwise, use normal styles and let CSS handle hover
    const useExplicitHover = state === 'hover';
    
    switch (type) {
      case 'primary':
        if (useExplicitHover) {
          classes.push('bg-[#0590a5] text-white');
        } else {
          classes.push('bg-[#08a7bf] text-white hover:bg-[#0590a5]');
        }
        break;
        
      case 'secondary':
        if (useExplicitHover) {
          classes.push('bg-[#e7edf4] border border-[#08a7bf] border-solid text-[#08a7bf]');
        } else {
          classes.push('bg-white border border-[#08a7bf] border-solid text-[#08a7bf] hover:bg-[#e7edf4]');
        }
        break;
        
      case 'normal':
        if (useExplicitHover) {
          classes.push('bg-[#e7edf4] border border-[#a7b9cc] border-solid text-[#2f353c]');
        } else {
          classes.push('bg-white border border-[#a7b9cc] border-solid text-[#2f353c] hover:bg-[#e7edf4]');
        }
        break;
        
      case 'ghost':
        if (useExplicitHover) {
          classes.push('bg-[#e7edf4] text-[#2f353c]');
        } else {
          classes.push('bg-white text-[#2f353c] hover:bg-[#e7edf4]');
        }
        break;
    }
    
    if (isDisabled) {
      classes.push('opacity-50 cursor-not-allowed');
    } else {
      classes.push('cursor-pointer');
    }
    
    return classes.join(' ');
  };

  // Debounce handler
  const handleDebounce = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }

      debounceTimerRef.current = setTimeout(async () => {
        if (onClick) {
          try {
            setInternalLoading(true);
            await onClick(e);
          } finally {
            setInternalLoading(false);
          }
        }
      }, debounceMs || 0);
    },
    [onClick, debounceMs]
  );

  // Throttle handler
  const handleThrottle = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      const now = Date.now();
      const timeSinceLastClick = now - lastClickTimeRef.current;

      if (timeSinceLastClick < (throttleMs || 0)) {
        return;
      }

      lastClickTimeRef.current = now;

      if (onClick) {
        try {
          setInternalLoading(true);
          await onClick(e);
        } finally {
          setInternalLoading(false);
        }
      }
    },
    [onClick, throttleMs]
  );

  // Regular click handler
  const handleClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled || !onClick) return;

      if (debounceMs) {
        handleDebounce(e);
      } else if (throttleMs) {
        handleThrottle(e);
      } else {
        try {
          setInternalLoading(true);
          await onClick(e);
        } finally {
          setInternalLoading(false);
        }
      }
    },
    [onClick, isDisabled, debounceMs, throttleMs, handleDebounce, handleThrottle]
  );

  // Cleanup timers on unmount
  React.useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      if (throttleTimerRef.current) {
        clearTimeout(throttleTimerRef.current);
      }
    };
  }, []);

  const buttonContent = (
    <>
      {loading || internalLoading ? (
        <LoadingSpinner className="w-4 h-4 mr-2" />
      ) : icon && iconPosition === 'left' ? (
        <span className="mr-2 flex items-center">{icon}</span>
      ) : null}
      
      <span className="shrink-0">{children}</span>
      
      {icon && iconPosition === 'right' && !loading && !internalLoading ? (
        <span className="ml-2 flex items-center">{icon}</span>
      ) : null}
    </>
  );

  const buttonProps = {
    onClick: handleClick,
    disabled: isDisabled,
    className: `${getButtonClasses()} ${className}`,
    type: htmlType,
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedBy,
    'aria-busy': loading || internalLoading,
  };

  // If href is provided, render as anchor tag
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={`${getButtonClasses()} ${className} ${isDisabled ? 'pointer-events-none' : ''}`}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button {...buttonProps}>
      {buttonContent}
    </button>
  );
}
