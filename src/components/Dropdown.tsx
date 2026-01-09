import React, { useState, useMemo } from 'react';
import Checkbox from './Checkbox';

export interface DropdownOption {
  id: string;
  label: string;
  checked?: boolean;
}

export interface DropdownProps {
  options?: DropdownOption[];
  searchPlaceholder?: string;
  onSelectionChange?: (selectedIds: string[]) => void;
  className?: string;
  width?: string;
}

export default function Dropdown({
  options = [],
  searchPlaceholder = '검색어를 입력해주세요.',
  onSelectionChange,
  className = '',
  width = '220px',
}: DropdownProps) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    new Set(options.filter(opt => opt.checked).map(opt => opt.id))
  );

  // Filter options based on search
  const filteredOptions = useMemo(() => {
    if (!searchValue.trim()) {
      return options;
    }
    return options.filter(option =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [options, searchValue]);

  const handleCheckboxChange = (id: string, checked: boolean) => {
    const newSelectedIds = new Set(selectedIds);
    if (checked) {
      newSelectedIds.add(id);
    } else {
      newSelectedIds.delete(id);
    }
    setSelectedIds(newSelectedIds);
    
    if (onSelectionChange) {
      onSelectionChange(Array.from(newSelectedIds));
    }
  };

  return (
    <div
      className={`
        bg-white content-stretch flex flex-col gap-2.5 items-start
        overflow-clip p-3 relative rounded-xl shadow-lg
        ${className}
      `}
      style={{ width }}
      data-name="dropdown"
    >
      {/* Search Input */}
      <div
        className={`
          bg-white border border-[#c9d5e1] border-solid content-stretch flex gap-1
          h-8 items-center justify-end overflow-clip px-2 py-0 relative rounded-md
          shrink-0 w-full
        `}
        data-name="search"
      >
        <div
          className="relative shrink-0 size-4 flex items-center justify-center"
          data-name="icon-search"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#2f353c]"
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
        </div>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={searchPlaceholder}
          className={`
            flex-1 font-normal leading-[1.6] min-h-px min-w-px
            not-italic overflow-ellipsis overflow-hidden relative shrink-0
            text-sm text-[#2f353c] whitespace-nowrap
            bg-transparent border-0 outline-none
            placeholder:text-[#a7b9cc]
          `}
        />
      </div>

      {/* Checkbox List */}
      <div
        className="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-full"
        data-name="checkbox_list"
      >
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option) => (
            <div
              key={option.id}
              className="content-stretch flex gap-1.5 h-7 items-center relative shrink-0 w-full"
              data-name="checkbox"
            >
              <Checkbox
                checked={selectedIds.has(option.id)}
                onChange={(checked) => handleCheckboxChange(option.id, checked)}
                labelText={option.label}
                label={true}
                className="w-full"
              />
            </div>
          ))
        ) : (
          <div className="px-2 py-1 text-sm text-[#a7b9cc]">
            No results found
          </div>
        )}
      </div>
    </div>
  );
}
