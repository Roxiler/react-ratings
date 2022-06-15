import React from 'react';
import { Data } from './Data';

export type Progress = {
  filledColor?: string;
  unfilledColor?: string;
  percentage?: (percent: number, data: Data) => React.ReactElement;
  progressBarText?: (data: Data) => React.ReactElement;
  className?: string;
  onClick?: (data: Data) => void;
};

export type Rating = {
  show?: boolean;
  filledColor?: string;
  unfilledColor?: string;
  ratingIconClassname?: string;
  className?: string;
  FilledRatingIcon?: React.ReactElement;
  UnfilledRatingIcon?: React.ReactElement;
  headerText?: (percent: number) => React.ReactElement;
};
export type Options = {
  progressBar: Progress;
  rating: Rating;
};
