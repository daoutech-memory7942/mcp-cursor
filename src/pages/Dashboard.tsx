import React, { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import SearchBar from '../components/dashboard/SearchBar';
import StatCard from '../components/dashboard/StatCard';
import NewsCard from '../components/dashboard/NewsCard';
import OverviewSection from '../components/dashboard/OverviewSection';
import { useDashboardData } from '../hooks/useDashboardData';
import { useSearch } from '../hooks/useSearch';

export default function Dashboard() {
  const { stats, news, loading, error, refreshData } = useDashboardData();
  const { searchValue, handleSearch, handleSearchChange } = useSearch();
  const [activeMenuId, setActiveMenuId] = useState<string>('home');

  const handleMenuClick = (menuId: string) => {
    setActiveMenuId(menuId);
    console.log('Menu clicked:', menuId);
    // 실제 라우팅 로직을 여기에 구현
  };

  const handleAdminClick = () => {
    console.log('Admin button clicked');
    // Admin 페이지로 이동하거나 모달 열기
  };

  const handleTutorialClick = () => {
    console.log('Tutorial button clicked');
    // Tutorial 모달 열기
  };

  const handleStatCardClick = (type: string) => {
    console.log('Stat card clicked:', type);
    // 상세 페이지로 이동
  };

  const handleNewsCardClick = (newsId: string) => {
    console.log('News card clicked:', newsId);
    // 뉴스 상세 페이지로 이동
  };

  if (loading) {
    return (
      <div className="bg-white content-stretch flex items-center justify-center relative size-full min-h-screen">
        <p className="text-[#2f353c]">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white content-stretch flex items-center justify-center relative size-full min-h-screen">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error: {error}</p>
          <button
            onClick={refreshData}
            className="px-4 py-2 bg-[#08a7bf] text-white rounded-md"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-white content-stretch flex items-start justify-center relative size-full min-h-screen"
      data-name="캘린더-page-대시보드"
      data-node-id="7530:394"
    >
      <Sidebar
        activeMenuId={activeMenuId}
        onMenuClick={handleMenuClick}
      />

      {/* Main Content */}
      <div
        className="bg-[#e7e8ec] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip pb-[40px] pt-0 px-0 relative self-stretch"
        data-name="body"
        data-node-id="7530:396"
      >
        <SearchBar
          searchValue={searchValue}
          onSearchChange={handleSearchChange}
          onSearch={handleSearch}
          onAdminClick={handleAdminClick}
          onTutorialClick={handleTutorialClick}
        />

        {/* Stats Overview Section */}
        {stats && (
          <OverviewSection title="Overview">
          <div
            className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
              data-name="stats-container"
            data-node-id="7531:2121"
            >
              <StatCard
                value={stats.totalDocuments}
                label="Total Documents"
                onClick={() => handleStatCardClick('documents')}
              />
              <StatCard
                value={stats.totalMail}
                label="Total Mail"
                onClick={() => handleStatCardClick('mail')}
              />
              <StatCard
                value={stats.totalApps}
                label="Total Apps"
                onClick={() => handleStatCardClick('apps')}
              />
              <StatCard
                value={stats.totalBoard}
                label="Total Board"
                onClick={() => handleStatCardClick('board')}
              />
            </div>
          </OverviewSection>
        )}

        {/* News Overview Section */}
        <OverviewSection title="Overview">
          <div
            className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full"
            data-name="image_list"
            data-node-id="7531:2255"
          >
            {news.map((item) => (
              <NewsCard
                key={item.id}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                onClick={() => handleNewsCardClick(item.id)}
              />
            ))}
          </div>
        </OverviewSection>
      </div>
    </div>
  );
}
