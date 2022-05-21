import { ProgressBarProps } from './ProgressBar';
import { RatingHeaderType } from './RatingHeader';

export type RatingsProps = {
  containerClassname?: string;
} & RatingHeaderType &
  ProgressBarProps;
