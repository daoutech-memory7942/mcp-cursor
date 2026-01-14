import React from 'react';
import Badge from './Badge';
import StatusMini from './StatusMini';

export type AvatarType = '김다우 사원';
export type AvatarSize = 'M(40x40)';

export interface AvatarProps {
  className?: string;
  masterBadge?: boolean;
  statusBadge?: boolean;
  type?: AvatarType;
  size?: AvatarSize;
}

export default function Avatar({
  className = '',
  masterBadge = true,
  statusBadge = true,
  type = '김다우 사원',
  size = 'M(40x40)',
}: AvatarProps) {
  return (
    <div className={`relative ${className}`} data-node-id="7531:841">
      <img
        className="block max-w-none size-full"
        alt=""
        height="40"
        src="/images/avatar-40x40.png"
        width="40"
      />
      {masterBadge && (
        <Badge className="absolute bg-[#1c1c1c] content-stretch flex flex-col inset-[52.5%_-2.5%_-2.5%_52.5%] items-center justify-center rounded-[24px]" />
      )}
      {statusBadge && (
        <StatusMini className="absolute bottom-0 left-0 size-[8px]" />
      )}
    </div>
  );
}
