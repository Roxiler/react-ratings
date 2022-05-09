import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import '../styles/filled.css';

interface data {
  count: number;
  rating: number;
}

interface Props {
  data: Array<data>;
  starStyle: string;
  progressFilledColor?: string;
  ratingIconClassname?: any;
  FilledRatingIcon?: any;
}

function FilledStarRating(props: Props) {
  const { data, starStyle, progressFilledColor, ratingIconClassname, FilledRatingIcon } = props;
  return (
    <>
      {
        <div className="filled" style={{ width: starStyle }}>
          {FilledRatingIcon
            ? data.map((star: data) => (
                <span
                  className={ratingIconClassname ? ratingIconClassname : 'star'}
                  style={{
                    color: progressFilledColor ? progressFilledColor : '#ebcf31'
                  }}>
                  {FilledRatingIcon}
                </span>
              ))
            : data.map((star: data) => (
                <span
                  className={ratingIconClassname ? ratingIconClassname : 'star'}
                  style={{
                    color: progressFilledColor ? progressFilledColor : '#ebcf31'
                  }}>
                  <AiFillStar />
                </span>
              ))}
        </div>
      }
    </>
  );
}

export default FilledStarRating;
