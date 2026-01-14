import { useState, useCallback } from 'react';

export function useSearch() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = useCallback((value: string) => {
    console.log('Searching for:', value);
    // 실제 검색 로직을 여기에 구현
    // 예: API 호출, 필터링 등
  }, []);

  const handleSearchChange = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchValue('');
  }, []);

  return {
    searchValue,
    handleSearch,
    handleSearchChange,
    clearSearch,
  };
}
