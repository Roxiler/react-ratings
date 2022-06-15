import React from 'react';
import { progressBarColors } from '../../../Consts/colors';
import classes from './progress.module.css';

interface Props {
  rating: number;
  value: number;
  total: number;
  percentage: number;
  filledColor?: string;
  unfilledColor?: string;
}

// eslint-disable-next-line space-before-function-paren
function Progress(props: Props) {
  const { percentage, filledColor, unfilledColor } = props;

  return (
    <div
      className={classes.progress_bar}
      style={{
        backgroundColor: unfilledColor || progressBarColors.unfilled
      }}
      role="progressbar"
      aria-valuenow={40}
      aria-valuemax={20}
      aria-valuemin={0}
    >
      <div
        className={classes.filled_bar}
        style={{
          width: `${percentage}%`,
          backgroundColor: filledColor || progressBarColors.filled
        }}
      ></div>
    </div>
  );
}

export default Progress;
