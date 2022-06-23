import React from 'react';
import { ProgressBarProps } from '../../Types/ProgressBar';
import { clsx } from '../../utilis/clsx';
import Progress from './Progress/Progress';
import classes from './progressBar.module.css';

// eslint-disable-next-line space-before-function-paren
function RatingBars(props: ProgressBarProps) {
  const { data = [], options = {} } = props;
  const { className = '', filledColor, unfilledColor, onClick } = options;

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

  const maximumRating = Math.max(...data.map((data) => data.rating));
  const possibleRatings = [...Array(maximumRating)].map((_, i) => i + 1);

  const addMissedRating: InitialGroupedObj = possibleRatings.reduce((acc, rating) => {
    if (groupedData[rating]) {
      return { ...acc, [rating]: groupedData[rating] };
    } else {
      return { ...acc, [rating]: 0 };
    }
  }, {});

  const combinedData = Object.entries(addMissedRating).map(([key, value]) => ({
    count: value,
    rating: Number(key)
  }));

  const total = combinedData.reduce(function (acc, obj) {
    return acc + obj.count;
  }, 0);

  return (
    <div className={classes.container}>
      {combinedData.map((item, index) => {
        const { count, rating } = item;
        const percent = (count * 100) / total || 0;

        return (
          <div
            key={index + count}
            className={clsx(classes.inner_container, className)}
            onClick={() => onClick && onClick(item)}>
            {options?.progressBarText ? (
              options.progressBarText(item)
            ) : (
              <span className={classes.subtext}>{rating}&nbsp;stars</span>
            )}

            <Progress
              rating={rating}
              value={count}
              total={total}
              percentage={percent}
              filledColor={filledColor}
              unfilledColor={unfilledColor}
            />

            <div>
              {!options?.percentage ? (
                <span className={classes.percent_text}>{Math.ceil(percent)} %</span>
              ) : (
                <React.Fragment>{options.percentage(percent, item)} </React.Fragment>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RatingBars;
