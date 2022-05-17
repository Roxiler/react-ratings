import React from 'react';
import { clsx } from '../../utilis/clsx';
import ProgressBar from '../ProgressBar';
import './styles.css';

interface DataProps {
  rating: number;
  value: number;
}
interface Props {
  data: Array<DataProps>;
  progressBarClassname?: string;
  substring?: string;
  onProgressClick?: () => void;
  progressFilledColor?: string;
  progressUnfilledColor?: string;
}
function Rating(props: Props) {
  const {
    data = [],
    progressBarClassname = '',
    substring = '',
    onProgressClick,
    progressFilledColor,
    progressUnfilledColor
  } = props;
  const total = data.reduce(function(acc, obj) {
    return acc + obj.value;
  }, 0);

  return (
    <div className={clsx('container', progressBarClassname)}>
      {data.map(item => {
        const { value, rating } = item;
        const percent = (value * 100) / total || 0;

        return (
          <div className="inner-container" onClick={onProgressClick}>
            <span className="subtext">
              {rating} {substring ? substring : 'star'}
            </span>
            <ProgressBar
              rating={rating}
              value={value}
              total={total}
              percentage={percent}
              progressFilledColor={progressFilledColor}
              progressUnfilledColor={progressUnfilledColor}
            />
            <span className="percent-text">{value} %</span>
          </div>
        );
      })}
    </div>
  );
}

export default Rating;
