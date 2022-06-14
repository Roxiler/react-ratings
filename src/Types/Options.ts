import React from 'react';
import { Data } from './Data';

export type Options = ProgressOptions & StarOptions;

export type ProgressOptions = {
  filledColor?: string;
  unfilledColor?: string;
  progressPercentage?: (percent: number, data: Data[]) => React.ReactElement;
  progressBarText?: (data: Data) => React.ReactElement;
  classname?: string;
  onClick?: (data: Data) => void;
};

export type StarOptions = {
  filledColor?: string;
  unfilledColor?: string;
  ratingIconClassname?: string;
  ratingHeaderClassname?: string;
  FilledRatingIcon?: React.ReactElement;
  UnfilledRatingIcon?: React.ReactElement;
};
