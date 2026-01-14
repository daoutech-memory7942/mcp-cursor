import React from 'react';
import StatCard from './StatCard';
import OverviewSection from './OverviewSection';

export interface StatItem {
  value: string | number;
  label: string;
  iconColor?: string;
  onClick?: () => void;
}

export interface StatsGridProps {
  stats: StatItem[];
  title?: string;
  className?: string;
}

export default function StatsGrid({
  stats,
  title = 'Overview',
  className = '',
}: StatsGridProps) {
  return (
    <OverviewSection title={title} className={className}>
      <div
        className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
        data-name="stats-container"
        data-node-id="7531:2121"
      >
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            value={stat.value}
            label={stat.label}
            iconColor={stat.iconColor}
            onClick={stat.onClick}
          />
        ))}
      </div>
    </OverviewSection>
  );
}
