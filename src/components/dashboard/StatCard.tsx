import React from 'react';

export interface StatCardProps {
  value: string | number;
  label: string;
  iconColor?: string;
  onClick?: () => void;
  className?: string;
}

export default function StatCard({
  value,
  label,
  iconColor = '#e7edf4',
  onClick,
  className = '',
}: StatCardProps) {
  return (
    <div
      className={`bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[12px] ${className}`}
      data-name="box"
    >
      <div
        className="content-stretch flex gap-[8px] items-center overflow-clip px-[20px] py-[24px] relative shrink-0 w-full"
        data-name="content"
      >
        <div
          className="rounded-[6px] shrink-0 size-[48px]"
          style={{ backgroundColor: iconColor }}
          data-name="icon"
        />
        <div
          className="content-stretch flex flex-col items-start justify-center leading-[1.5] not-italic relative shrink-0 text-black whitespace-pre-wrap"
          data-name="txt"
        >
          <p className="font-bold relative shrink-0 text-[18px]">
            {value}
          </p>
          <p className="font-normal relative shrink-0 text-[13px]">
            {label}
          </p>
        </div>
      </div>
      <div
        className={`border-[#e4e6ec] border-solid border-t content-stretch flex items-center justify-between overflow-clip pl-[20px] pr-[12px] py-[10px] relative shrink-0 w-full ${
          onClick ? 'cursor-pointer hover:bg-[#f5f7fa] transition-colors' : ''
        }`}
        data-name="footer"
        onClick={onClick}
      >
        <p className="font-normal leading-[1.5] not-italic relative shrink-0 text-[13px] text-black">
          See detail
        </p>
        <div
          className="overflow-clip relative shrink-0 size-[16px]"
          data-name="chevron-right"
        >
          <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4">
            <div
              className="absolute inset-[-9.38%_-18.75%]"
              style={{ '--stroke-0': 'rgba(53, 64, 82, 1)' } as React.CSSProperties}
            >
              <img
                alt=""
                className="block max-w-none size-full"
                src="/images/icon-chevron-right.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
