/*eslint-disable*/
import React from 'react';
import FilledStarRating from '../FilledStarRating';
import classes from './Unfilled.module.css';
import { Data } from '../../../Types/Data';
import { clsx } from '../../../utilis/clsx';
import { starColors } from '../../../Consts/colors';

interface Props {
  data: Data[];
  progressFilledColor?: string;
  progressUnfilledColor?: string;
  ratingIconClassname?: string;
  FilledRatingIcon: React.ReactElement;
  UnfilledRatingIcon: React.ReactElement;
  width: string;
}

const StarRating = (props: Props) => {
  const {
    data,
    progressFilledColor,
    progressUnfilledColor,
    ratingIconClassname = '',
    FilledRatingIcon,
    UnfilledRatingIcon,
    width
  } = props;
  const numberOfRating = Math.max(...data.map((data) => data.rating));
  return (
    <div className={classes.unfilled}>
      {[...Array(numberOfRating)].map((_, i) => (
        <span
          key={`unfilled-star custom icon ${i}`}
          // eslint-disable-next-line no-unneeded-ternary
          className={clsx(classes.star, ratingIconClassname)}
          style={{
            // eslint-disable-next-line no-unneeded-ternary
            color: progressUnfilledColor || starColors.unfilled
          }}
        >
          {progressUnfilledColor ? FilledRatingIcon : UnfilledRatingIcon}
        </span>
      ))}
      <FilledStarRating
        data={data}
        progressFilledColor={progressFilledColor}
        ratingIconClassname={ratingIconClassname}
        FilledRatingIcon={FilledRatingIcon}
        width={width}
      />
    </div>
  );
};

export default StarRating;
