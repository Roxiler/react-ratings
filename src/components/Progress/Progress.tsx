import React from 'react';
import { progressBarColors } from '../../Consts/colors';
import './progress.modules.css';

interface Props {
  rating: number;
  value: number;
  total: number;
  percentage: number;
  progressFilledColor?: string;
  progressUnfilledColor?: string;
}

// eslint-disable-next-line space-before-function-paren
function Progress(props: Props) {
  const { percentage, progressFilledColor, progressUnfilledColor } = props;

  return (
    <div
      className="progress-bar"
      style={{
        backgroundColor: progressUnfilledColor || progressBarColors.unfilled
      }}
      role="progressbar"
      aria-valuenow={40}
      aria-valuemax={20}
      aria-valuemin={0}
    >
      <div
        className="filled-bar"
        style={{
          width: `${percentage}%`,
          backgroundColor: progressFilledColor || progressBarColors.filled
        }}
      ></div>
    </div>
  );
}

export default Progress;
