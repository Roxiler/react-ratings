import React from 'react';
import { ProgressBarProps } from '../../Types/ProgressBar';
import { clsx } from '../../utilis/clsx';
import ProgressBar from '../ProgressBar';
import './styles.css';

// eslint-disable-next-line space-before-function-paren
function Rating(props: ProgressBarProps) {
  const {
    data = [],
    progressBarClassname = '',
    substring = '',
    onProgressClick,
    progressFilledColor,
    progressUnfilledColor
  } = props;

  interface InitialGroupedObj {
    [key: number]: number;
  }

  const initialGroupedObj: InitialGroupedObj = {};

  const groupedData = data.reduce((acc, obj) => {
    if (acc[obj.rating]) {
      return { ...acc, [obj.rating]: acc[obj.rating] + obj.count };
    } else {
      return { ...acc, [obj.rating]: obj.count };
    }
  }, initialGroupedObj);

  const combinedData = Object.entries(groupedData).map(([key, value]) => ({
    count: value,
    rating: Number(key)
  }));

  const total = combinedData.reduce(function (acc, obj) {
    return acc + obj.count;
  }, 0);

  console.log({ combinedData }, total);
  return (
    <div className={clsx('container', progressBarClassname)}>
      {combinedData.map((item, index) => {
        const { count, rating } = item;
        const percent = (count * 100) / total || 0;

        return (
          <div key={index + count} className="inner-container" onClick={onProgressClick}>
            <span className="subtext">
              {rating} {substring || 'star'}
            </span>
            <ProgressBar
              rating={rating}
              value={count}
              total={total}
              percentage={percent}
              progressFilledColor={progressFilledColor}
              progressUnfilledColor={progressUnfilledColor}
            />
            <span className="percent-text">{percent.toFixed(2)} %</span>
          </div>
        );
      })}
    </div>
  );
}

export default Rating;
