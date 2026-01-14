import React from 'react';
import NewsCard from './NewsCard';
import OverviewSection from './OverviewSection';

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  onClick?: () => void;
}

export interface NewsGridProps {
  news: NewsItem[];
  title?: string;
  className?: string;
}

export default function NewsGrid({
  news,
  title = 'Overview',
  className = '',
}: NewsGridProps) {
  return (
    <OverviewSection title={title} className={className}>
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
            onClick={item.onClick}
          />
        ))}
      </div>
    </OverviewSection>
  );
}
