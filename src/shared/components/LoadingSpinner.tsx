import React from 'react';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 28 }) => {
  const spinnerSize = `${size}px`;

  return (
    <div
      className="animate-spin rounded-full border-4 border-t-transparent border-b-transparent mx-auto"
      style={{ height: spinnerSize, width: spinnerSize }}
    ></div>
  );
};

export default LoadingSpinner;