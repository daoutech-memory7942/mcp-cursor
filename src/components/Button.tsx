import React from 'react';

export type ButtonType = 'primary' | 'normal' | 'ghost' | 'secondary';
export type ButtonState = 'hover' | 'normal';

export interface ButtonProps {
  type?: ButtonType;
  state?: ButtonState;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  type = 'primary',
  state = 'normal',
  children = 'Button',
  onClick,
  className = '',
  disabled = false,
}: ButtonProps) {
  // Base classes
  const baseClasses = 'content-stretch flex h-8 items-center overflow-clip px-3 py-0 relative rounded-md font-medium leading-[1.6] text-sm transition-colors duration-200';
  
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
    
    if (disabled) {
      classes.push('opacity-50 cursor-not-allowed');
    } else {
      classes.push('cursor-pointer');
    }
    
    return classes.join(' ');
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${getButtonClasses()} ${className}`}
      type="button"
    >
      <span className="shrink-0">{children}</span>
    </button>
  );
}
