import React from 'react';

export type StatusMiniStatus = 'online';

export interface StatusMiniProps {
  className?: string;
  status?: StatusMiniStatus;
}

export default function StatusMini({
  className = '',
  status = 'online',
}: StatusMiniProps) {
  return (
    <div className={className} data-node-id="7531:586">
      <div className="absolute left-0 size-[8px] top-1/2 translate-y-[-50%]" data-node-id="7531:587">
        <div
          className="absolute inset-[-6.25%]"
          style={{
            '--fill-0': 'rgba(10, 201, 67, 1)',
            '--stroke-0': 'rgba(255, 255, 255, 1)',
          } as React.CSSProperties}
        >
          <img
            className="block max-w-none size-full"
            alt=""
            src="/images/ellipse-status.png"
          />
        </div>
      </div>
    </div>
  );
}
