import React from 'react';
import { Data } from './Data';

export type ProgressOptions = {
  filledColor?: string;
  unfilledColor?: string;
  progressPercentage?: (percent: number, data: Data) => React.ReactElement;
  progressBarText?: (data: Data) => React.ReactElement;
  className?: string;
  onProgressBarClick?: (data: Data) => void;
};

export type StarOptions = {
  showRatingHeader?: boolean;
  filledColor?: string;
  unfilledColor?: string;
  ratingIconClassname?: string;
  ratingHeaderClassname?: string;
  FilledRatingIcon?: React.ReactElement;
  UnfilledRatingIcon?: React.ReactElement;
  customRatingHeader?: (percent: number) => React.ReactElement;
};
export type Options = ProgressOptions & StarOptions;
