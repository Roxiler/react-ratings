import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import FilledStarRating from './FilledStarRating';
import '../styles/Unfilled.css';
import { Data } from '../Types/Data';

interface Props {
  data: Data[];
  progressFilledColor?: string;
  progressUnfilledColor?: string;
  ratingIconClassname?: string;
  FilledRatingIcon?: React.ElementType;
  UnfilledRatingIcon?: React.ElementType;
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
        ? [...Array(numberOfRating)].map((_, i) => (
            <span
              key={`unfilled-star custom icon ${i}`}
              // eslint-disable-next-line no-unneeded-ternary
              className={ratingIconClassname ? ratingIconClassname : 'star'}
              style={{
                // eslint-disable-next-line no-unneeded-ternary
                color: progressUnfilledColor ? progressUnfilledColor : '#ebcf31'
              }}>
              <UnfilledRatingIcon />
            </span>
          ))
        : [...Array(numberOfRating)].map((_, i) => (
            <span
              key={`unfilled-star default icon ${i}`}
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
