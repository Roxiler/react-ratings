import { Data } from './Data';

export type ProgressBarProps = {
  data: Data[];
  progressBarClassname?: string;
  substring?: string;
  onProgressClick?: () => void;
  progressFilledColor?: string;
  progressUnfilledColor?: string;
};
