import { Data } from './Data';

export type ProgressBarProps = {
  data: Data[];
  progressBarClassname?: string;
  progressBarText?: string;
  onProgressClick?: (data: Data) => null;
  progressFilledColor?: string;
  progressUnfilledColor?: string;
  progressbarPercent?: boolean;
};
