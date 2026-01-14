import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import StatsGrid from '../components/dashboard/StatsGrid';
import NewsGrid from '../components/dashboard/NewsGrid';
import { LoadingState, ErrorState } from '../components/dashboard/DashboardStates';
import { useDashboardData } from '../hooks/useDashboardData';
import { useSearch } from '../hooks/useSearch';

export default function Dashboard() {
  const { stats, news, loading, error, refreshData } = useDashboardData();
  const { searchValue, handleSearch, handleSearchChange } = useSearch();

  const handleMenuClick = (menuId: string) => {
    console.log('Menu clicked:', menuId);
  };

  const handleAdminClick = () => {
    console.log('Admin button clicked');
  };

  const handleTutorialClick = () => {
    console.log('Tutorial button clicked');
  };

  const handleStatCardClick = (type: string) => {
    console.log('Stat card clicked:', type);
  };

  const handleNewsCardClick = (newsId: string) => {
    console.log('News card clicked:', newsId);
  };

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} onRetry={refreshData} />;
  }

  // 통계 데이터를 StatItem 배열로 변환
  const statItems = stats
    ? [
        {
          value: stats.totalDocuments,
          label: 'Total Documents',
          onClick: () => handleStatCardClick('documents'),
        },
        {
          value: stats.totalMail,
          label: 'Total Mail',
          onClick: () => handleStatCardClick('mail'),
        },
        {
          value: stats.totalApps,
          label: 'Total Apps',
          onClick: () => handleStatCardClick('apps'),
        },
        {
          value: stats.totalBoard,
          label: 'Total Board',
          onClick: () => handleStatCardClick('board'),
        },
      ]
    : [];

  // 뉴스 데이터에 onClick 핸들러 추가
  const newsItems = news.map((item) => ({
    ...item,
    onClick: () => handleNewsCardClick(item.id),
  }));

  return (
    <DashboardLayout
      onMenuClick={handleMenuClick}
      onAdminClick={handleAdminClick}
      onTutorialClick={handleTutorialClick}
      searchValue={searchValue}
      onSearchChange={handleSearchChange}
      onSearch={handleSearch}
    >
      <DashboardLayout.Sidebar />
      <DashboardLayout.Content>
        {stats && <StatsGrid stats={statItems} />}
        <NewsGrid news={newsItems} />
      </DashboardLayout.Content>
    </DashboardLayout>
  );
}
