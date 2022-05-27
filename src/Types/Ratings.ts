import React from 'react';
import { Data } from './Data';
import { ProgressBarProps } from './ProgressBar';

export type RatingsProps = {
  containerClassname?: string;
  data: Data[];
  showRatingHeader: boolean;
  progressFilledColor?: string;
  progressUnfilledColor?: string;
  ratingIconClassname?: string;
  ratingHeaderClassname?: string;
  FilledRatingIcon?: React.ReactElement;
  UnfilledRatingIcon?: React.ReactElement;
} & ProgressBarProps;
