import React from 'react';

export interface OverviewSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function OverviewSection({
  title,
  children,
  className = '',
}: OverviewSectionProps) {
  return (
    <div
      className={`content-stretch flex flex-col gap-[16px] items-start justify-center pb-0 pt-[20px] px-[24px] relative shrink-0 w-full ${className}`}
      data-name="container"
    >
      <p className="font-['Pretendard:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[length:var(--font-size\/heading\/medium,18px)] text-black" data-node-id="7530:397">
        {title}
      </p>
      {children}
    </div>
  );
}
