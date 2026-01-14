import React from 'react';

export interface NewsCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  onClick?: () => void;
  className?: string;
}

export default function NewsCard({
  title,
  description,
  imageUrl,
  onClick,
  className = '',
}: NewsCardProps) {
  return (
    <div
      className={`bg-white content-stretch flex flex-[1_0_0] flex-col h-[280px] items-start min-h-px min-w-px overflow-clip relative ${
        onClick ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''
      } ${className}`}
      data-name="box"
      onClick={onClick}
    >
      <div
        className="bg-[#f2f5f7] content-stretch flex items-center justify-center overflow-clip px-[20px] py-[40px] relative shrink-0 w-full"
        data-name="images"
        data-node-id="7531:2239"
      >
        {imageUrl ? (
          <img
            alt={title}
            className="block max-w-none size-full object-cover"
            src={imageUrl}
          />
        ) : (
          <div className="relative shrink-0 size-[52px]" data-name="photo" data-node-id="7531:2240">
            <img
              alt=""
              className="block max-w-none size-full"
              src="/images/icon-photo.svg"
            />
          </div>
        )}
      </div>
      <div
        className="border-[#e4e6ec] border-solid border-t content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start leading-[1.5] min-h-px min-w-px not-italic overflow-clip pl-[20px] pr-[12px] py-[10px] relative text-black w-full"
        data-name="bottom_btn"
        data-node-id="7531:2242"
      >
        <p className="font-['Pretendard:Bold',sans-serif] relative shrink-0 text-[length:var(--font-size\/heading\/medium,18px)]" data-node-id="7531:2243">
          {title}
        </p>
        <p className="flex-[1_0_0] font-['Pretendard:Regular',sans-serif] min-h-px min-w-px overflow-hidden relative text-[13px] text-ellipsis w-full whitespace-pre-wrap" data-node-id="7531:2244">
          {description}
        </p>
      </div>
    </div>
  );
}
