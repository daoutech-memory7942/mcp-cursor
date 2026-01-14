import React, { createContext, useContext } from 'react';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';

interface DashboardContextValue {
  onMenuClick?: (menuId: string) => void;
  onAdminClick?: () => void;
  onTutorialClick?: () => void;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onSearch?: (value: string) => void;
}

const DashboardContext = createContext<DashboardContextValue>({});

export const useDashboardContext = () => useContext(DashboardContext);

interface DashboardLayoutProps {
  children: React.ReactNode;
  onMenuClick?: (menuId: string) => void;
  onAdminClick?: () => void;
  onTutorialClick?: () => void;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onSearch?: (value: string) => void;
}

const DashboardLayoutRoot: React.FC<DashboardLayoutProps> = ({
  children,
  onMenuClick,
  onAdminClick,
  onTutorialClick,
  searchValue,
  onSearchChange,
  onSearch,
}) => {
  return (
    <DashboardContext.Provider
      value={{
        onMenuClick,
        onAdminClick,
        onTutorialClick,
        searchValue,
        onSearchChange,
        onSearch,
      }}
    >
      <div
        className="bg-white content-stretch flex items-start justify-center relative size-full min-h-screen"
        data-name="캘린더-page-대시보드"
        data-node-id="7530:394"
      >
        {children}
      </div>
    </DashboardContext.Provider>
  );
};

const DashboardSidebar: React.FC = () => {
  const { onMenuClick } = useDashboardContext();
  return <Sidebar onMenuClick={onMenuClick} />;
};

const DashboardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { searchValue, onSearchChange, onSearch, onAdminClick, onTutorialClick } =
    useDashboardContext();

  return (
    <div
      className="bg-[#e7e8ec] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip pb-[40px] pt-0 px-0 relative self-stretch"
      data-name="body"
      data-node-id="7530:396"
    >
      <SearchBar
        searchValue={searchValue}
        onSearchChange={onSearchChange}
        onSearch={onSearch}
        onAdminClick={onAdminClick}
        onTutorialClick={onTutorialClick}
      />
      {children}
    </div>
  );
};

// 합성 컴포넌트 패턴
export const DashboardLayout = Object.assign(DashboardLayoutRoot, {
  Sidebar: DashboardSidebar,
  Content: DashboardContent,
});
