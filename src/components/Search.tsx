import React, { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils/cn";

export type SearchState = "normal" | "hover";

export interface SearchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onFocus" | "onBlur"> {
  state?: SearchState;
  onStateChange?: (state: SearchState) => void;
}

const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path
      d="M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 10.5L14 14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Search = forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      state: controlledState,
      onStateChange,
      className,
      onFocus,
      onBlur,
      placeholder = "검색어를 입력해주세요.",
      disabled,
      ...props
    },
    ref
  ) => {
    const [internalState, setInternalState] = React.useState<SearchState>("normal");
    const isControlled = controlledState !== undefined;
    const currentState = isControlled ? controlledState : internalState;

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalState("hover");
      }
      if (onStateChange) {
        onStateChange("hover");
      }
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalState("normal");
      }
      if (onStateChange) {
        onStateChange("normal");
      }
      onBlur?.(e);
    };

    return (
      <div
        className={cn(
          "bg-bg-neutral-base border border-solid content-stretch flex gap-[var(--padding-2)] h-[var(--height-5)] items-center justify-end overflow-clip px-[var(--padding-4)] relative rounded-medium w-full transition-colors",
          currentState === "hover"
            ? "border-border-neutral-level1-hover"
            : "border-border-neutral-level1",
          disabled && "bg-input-bg-disabled cursor-not-allowed",
          className
        )}
        data-name="search"
      >
        <div className="relative shrink-0 size-4 pointer-events-none" data-name="icon-search">
          <SearchIcon />
        </div>
        <input
          ref={ref}
          type="search"
          placeholder={placeholder}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={cn(
            "flex-1 font-pretendard text-typo-body-medium-regular leading-normal min-h-px min-w-px not-italic overflow-hidden relative bg-transparent border-0 outline-0",
            "text-input-text-normal placeholder:text-input-text-disabled",
            disabled && "text-input-text-disabled cursor-not-allowed"
          )}
          {...props}
        />
      </div>
    );
  }
);

Search.displayName = "Search";

export default Search;
