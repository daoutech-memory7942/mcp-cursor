import React from 'react';

export type BadgeType = 'Manager';
export type BadgeColor = 'Black';
export type BadgeSize = 'M';

export interface BadgeProps {
  className?: string;
  type?: BadgeType;
  color?: BadgeColor;
  size?: BadgeSize;
}

export default function Badge({
  className = '',
  type = 'Manager',
  color = 'Black',
  size = 'M',
}: BadgeProps) {
  return (
    <div
      className={`bg-[#1c1c1c] content-stretch flex flex-col items-center justify-center rounded-[24px] ${className}`}
      data-node-id="7531:535"
    >
      <div
        className="flex flex-[1_0_0] flex-col font-medium justify-center leading-[0] min-h-px min-w-px relative text-white text-[12px] text-center tracking-[-0.24px] w-[9px]"
        data-node-id="7531:536"
      >
        <p className="leading-[12px] whitespace-pre-wrap">M</p>
      </div>
    </div>
  );
}
