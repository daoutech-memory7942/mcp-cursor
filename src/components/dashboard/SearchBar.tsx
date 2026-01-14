import React from 'react';
import Search from '../Search';
import Button from '../Button';

export interface SearchBarProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  onAdminClick?: () => void;
  onTutorialClick?: () => void;
}

export default function SearchBar({
  searchValue = '',
  onSearchChange,
  onSearch,
  onAdminClick,
  onTutorialClick,
}: SearchBarProps) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearchChange) {
      onSearchChange(e.target.value);
    }
  };

  const handleSearch = (value: string) => {
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div
      className="border border-[#d3d6e3] border-solid content-stretch flex items-center justify-between px-[24px] py-[16px] relative shrink-0 w-full"
      data-name="search"
      data-node-id="7531:2091"
    >
      <Search
        state="normal"
        className="shrink-0 w-[280px]"
        placeholder="검색어를 입력해주세요."
        value={searchValue}
        onChange={handleSearchChange}
        onSearch={handleSearch}
      />
      <div
        className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0"
        data-name="wrap_btn"
        data-node-id="7531:2107"
      >
        <Button type="normal" state="normal" onClick={onAdminClick}>
          Admin
        </Button>
        <Button type="primary" state="normal" onClick={onTutorialClick}>
          Tutorial
        </Button>
      </div>
    </div>
  );
}
