import React from 'react';
import './styles.css';

interface Props {
  rating: number;
  value: number;
  total: number;
  percentage: number;
  progressFilledColor?: string;
  progressUnfilledColor?: string;
}

// eslint-disable-next-line space-before-function-paren
function ProgressBar(props: Props) {
  const { percentage, progressFilledColor, progressUnfilledColor } = props;

  return (
    <div
      className="progress-bar"
      style={{
        backgroundColor: progressFilledColor || ''
      }}
      role="progressbar"
      aria-valuenow={40}
      aria-valuemax={20}
      aria-valuemin={0}>
      <div
        className="filled-bar"
        style={{
          width: `${percentage}%`,
          backgroundColor: progressUnfilledColor || ''
        }}></div>
    </div>
  );
}

export default ProgressBar;
