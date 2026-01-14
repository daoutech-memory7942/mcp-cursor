import { useState, useEffect, useCallback } from 'react';

export interface StatData {
  totalDocuments: number;
  totalMail: number;
  totalApps: number;
  totalBoard: number;
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  date?: string;
}

// Mock API functions
const fetchStats = async (): Promise<StatData> => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    totalDocuments: 10,
    totalMail: 412,
    totalApps: 54,
    totalBoard: 7,
  };
};

const fetchNews = async (): Promise<NewsItem[]> => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500));
  return [
    {
      id: '1',
      title: 'Next Week',
      description:
        'President Lee Jae Myung is poised to fly to Beijing for a state visit to meet Chinese President Xi Jinping next week, Cheong Wa Dae spokesperson Kang Yu-jung said Tuesday.',
    },
    {
      id: '2',
      title: 'Next Week',
      description:
        'President Lee Jae Myung is poised to fly to Beijing for a state visit to meet Chinese President Xi Jinping next week, Cheong Wa Dae spokesperson Kang Yu-jung said Tuesday.',
    },
    {
      id: '3',
      title: 'A look back at 2025',
      description:
        'President Lee Jae Myung came into office in June, filling the void left by former President Yoon Suk Yeol. The transition reshaped the political landscape. The conservative People Power Party saw its',
    },
    {
      id: '4',
      title: 'NIS refutes Coupang',
      description:
        "South Korea's National Intelligence Service on Tuesday denied Coupang interim",
    },
  ];
};

export function useDashboardData() {
  const [stats, setStats] = useState<StatData | null>(null);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const [statsData, newsData] = await Promise.all([
        fetchStats(),
        fetchNews(),
      ]);
      setStats(statsData);
      setNews(newsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const refreshData = useCallback(() => {
    loadData();
  }, [loadData]);

  return {
    stats,
    news,
    loading,
    error,
    refreshData,
  };
}
