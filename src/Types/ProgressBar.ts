import React from 'react';
import { Data } from './Data';

export type ProgressBarProps = {
  data: Data[];
  progressBarClassname?: string;
  progressBarText?: React.ElementType | string;
  onProgressClick?: (data: Data) => void;
  progressFilledColor?: string;
  progressUnfilledColor?: string;
  progressbarPercent?: boolean;
};
