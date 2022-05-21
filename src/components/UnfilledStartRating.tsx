import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import FilledStarRating from './FilledStarRating';
import '../styles/Unfilled.css';

interface data {
  count: number;
  rating: number;
}

interface Props {
  data: Array<data>;
  progressFilledColor?: string;
  progressUnfilledColor?: string;
  ratingIconClassname?: any;
  FilledRatingIcon?: any;
  UnfilledRatingIcon?: any;
  width: string;
}

const StarRating = (props: Props) => {
  const {
    data,
    progressFilledColor,
    progressUnfilledColor,
    ratingIconClassname,
    FilledRatingIcon,
    UnfilledRatingIcon,
    width
  } = props;
  const numberOfRating = Math.max(...data.map((data) => data.rating));
  return (
    <div className="unfilled">
      {UnfilledRatingIcon
        ? [...Array(numberOfRating)].map(() => (
            <span
              key=""
              // eslint-disable-next-line no-unneeded-ternary
              className={ratingIconClassname ? ratingIconClassname : 'star'}
              style={{
                // eslint-disable-next-line no-unneeded-ternary
                color: progressUnfilledColor ? progressUnfilledColor : '#ebcf31'
              }}>
              <UnfilledRatingIcon />
            </span>
          ))
        : [...Array(numberOfRating)].map(() => (
            <span
              key=""
              // eslint-disable-next-line no-unneeded-ternary
              className={ratingIconClassname ? ratingIconClassname : 'star'}
              style={{
                // eslint-disable-next-line no-unneeded-ternary
                color: progressFilledColor ? progressFilledColor : '#ebcf31'
              }}>
              <AiOutlineStar />
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
