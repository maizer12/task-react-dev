import React from 'react';

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 28 }) => {
  const spinnerSize = `${size}px`;

  return (
    <div
      className="animate-spin rounded-full anim-opacity border-4 border-t-transparent border-b-transparent"
      style={{ height: spinnerSize, width: spinnerSize }}
    ></div>
  );
};

export default LoadingSpinner;
