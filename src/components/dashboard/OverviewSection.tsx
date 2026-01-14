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
      <p className="font-bold leading-[1.5] not-italic relative shrink-0 text-[18px] text-black">
        {title}
      </p>
      {children}
    </div>
  );
}
