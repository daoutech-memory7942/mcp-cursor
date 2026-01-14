import React from 'react';

interface LoadingStateProps {
  message?: string;
}

export function LoadingState({ message = 'Loading...' }: LoadingStateProps) {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative size-full min-h-screen">
      <p className="text-[#2f353c]">{message}</p>
    </div>
  );
}

interface ErrorStateProps {
  error: string;
  onRetry?: () => void;
  retryLabel?: string;
}

export function ErrorState({
  error,
  onRetry,
  retryLabel = 'Retry',
}: ErrorStateProps) {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative size-full min-h-screen">
      <div className="text-center">
        <p className="text-red-500 mb-4">Error: {error}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-4 py-2 bg-[#08a7bf] text-white rounded-md"
          >
            {retryLabel}
          </button>
        )}
      </div>
    </div>
  );
}
