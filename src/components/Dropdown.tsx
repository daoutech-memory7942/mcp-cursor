import React, { useState, useRef, useEffect } from "react";
import { cn } from "../utils/cn";
import Search from "./Search";
import Checkbox from "./Checkbox";

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  selectedValues?: string[];
  onSelectionChange?: (selectedValues: string[]) => void;
  searchPlaceholder?: string;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
}

const Dropdown = ({
  options,
  selectedValues = [],
  onSelectionChange,
  searchPlaceholder = "검색어를 입력해주세요.",
  className,
  open: controlledOpen,
  onOpenChange,
  trigger,
}: DropdownProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const handleToggle = () => {
    const newOpen = !isOpen;
    if (!isControlled) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  const handleOptionToggle = (value: string) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    onSelectionChange?.(newSelectedValues);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (!isControlled) {
          setInternalOpen(false);
        }
        onOpenChange?.(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isControlled, onOpenChange]);

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      {trigger && (
        <div onClick={handleToggle} className="cursor-pointer">
          {trigger}
        </div>
      )}
      {isOpen && (
        <div
          className={cn(
            "bg-bg-neutral-surface content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[var(--padding-5)] absolute rounded-xlarge shadow-[0px_4px_20px_0px_rgba(0,0,0,0.16)] w-[220px] z-50",
            !trigger && "relative"
          )}
          data-name="dropdown"
        >
          <div className="w-full">
            <Search
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full"
            />
          </div>
          <div
            className="content-stretch flex flex-col gap-[var(--padding-2)] items-start relative shrink-0 w-full"
            data-name="checkbox_list"
          >
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                className="content-stretch flex gap-[var(--padding-3)] h-7 items-center relative shrink-0 w-full"
                data-name="checkbox"
              >
                <Checkbox
                  label={option.label}
                  checked={selectedValues.includes(option.value)}
                  onChange={(checked) => {
                    handleOptionToggle(option.value);
                  }}
                  className="w-full"
                />
              </div>
            ))}
            {filteredOptions.length === 0 && (
              <div className="text-typo-body-medium-regular text-text-neutral-description py-2">
                검색 결과가 없습니다.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

Dropdown.displayName = "Dropdown";

export default Dropdown;
