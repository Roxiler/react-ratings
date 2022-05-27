import React from 'react';
import { Data } from './Data';

export type RatingHeaderType = {
  data: Data[];
  showRatingHeader: boolean;
  progressFilledColor?: string;
  progressUnfilledColor?: string;
  ratingIconClassname?: string;
  ratingHeaderClassname?: string;
  FilledRatingIcon: React.ReactElement;
  UnfilledRatingIcon: React.ReactElement;
  ratingHeaderTextClassname?: string;
};
