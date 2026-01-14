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
      className={`bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative ${className}`}
      data-name="box"
      data-node-id="7531:2124"
    >
      <div
        className="content-stretch flex items-center justify-between overflow-clip px-[20px] py-[24px] relative shrink-0 w-full"
        data-name="bottom_btn"
        data-node-id="7531:2133"
      >
        <div
          className="content-stretch flex flex-col items-center justify-center leading-[1.5] not-italic relative shrink-0 text-black whitespace-pre-wrap"
          data-name="txt"
          data-node-id="7531:2139"
        >
          <p className="font-['Pretendard:Bold',sans-serif] relative shrink-0 text-[length:var(--font-size\/heading\/medium,18px)] w-[192px]" data-node-id="7531:2134">
            {value}
          </p>
          <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[length:var(--font-size\/body\/small,13px)] w-[192px]" data-node-id="7531:2140">
            {label}
          </p>
        </div>
        <div
          className="bg-[#e7edf4] rounded-md shrink-0 size-[48px]"
          style={{ backgroundColor: iconColor }}
          data-name="image"
          data-node-id="7531:2138"
        />
      </div>
      <div
        className={`border-[#e4e6ec] border-solid border-t content-stretch flex items-center justify-between overflow-clip pl-[20px] pr-[12px] py-[10px] relative shrink-0 w-full ${
          onClick ? 'cursor-pointer hover:bg-[#f5f7fa] transition-colors' : ''
        }`}
        data-name="bottom_btn"
        data-node-id="7531:2125"
        onClick={onClick}
      >
        <p className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[length:var(--font-size\/body\/small,13px)] text-black" data-node-id="7531:2131">
          See detail
        </p>
        <div
          className="overflow-clip relative shrink-0 size-[16px]"
          data-name="chevron-right"
          data-node-id="7531:2126"
        >
          <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector" data-node-id="I7531:2126;514:37037">
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
