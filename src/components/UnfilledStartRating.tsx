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
  starStyle: string;
  progressFilledColor?: string;
  progressUnfilledColor?: string;
  ratingIconClassname?: any;
  FilledRatingIcon?: any;
  UnfilledRatingIcon?: any;
}

const StarRating = (props: Props) => {
  const {
    data,
    starStyle,
    progressFilledColor,
    progressUnfilledColor,
    ratingIconClassname,
    FilledRatingIcon,
    UnfilledRatingIcon
  } = props;
  return (
    <>
      {
        <div className="unfilled">
          {UnfilledRatingIcon
            ? data.map(star => (
                <span
                  className={ratingIconClassname ? ratingIconClassname : 'star'}
                  style={{
                    color: progressUnfilledColor ? progressUnfilledColor : '#ebcf31'
                  }}>
                  {UnfilledRatingIcon}
                </span>
              ))
            : data.map((star: data) => (
                <span
                  className={ratingIconClassname ? ratingIconClassname : 'star'}
                  style={{
                    color: progressFilledColor ? progressFilledColor : '#ebcf31'
                  }}>
                  <AiOutlineStar />
                </span>
              ))}
          <FilledStarRating
            data={data}
            starStyle={starStyle}
            progressFilledColor={progressFilledColor}
            ratingIconClassname={ratingIconClassname}
            FilledRatingIcon={FilledRatingIcon}
          />
        </div>
      }
    </>
  );
};

export default StarRating;
