import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import '../styles/filled.css';

interface data {
  count: number;
  rating: number;
}

interface Props {
  data: Array<data>;
  progressFilledColor?: string;
  ratingIconClassname?: any;
  FilledRatingIcon?: any;
  width: string;
}

// eslint-disable-next-line
function FilledStarRating(props: Props) {
  const { data, progressFilledColor, ratingIconClassname, FilledRatingIcon, width } = props;
  const numberOfRating = Math.max(...data.map((data) => data.rating));
  return (
    <div className="filled" style={{ width }}>
      {FilledRatingIcon
        ? [...Array(numberOfRating)].map(() => (
            <span
              key=""
              className={ratingIconClassname || 'star'}
              style={{
                color: progressFilledColor || '#ebcf31'
              }}>
              {FilledRatingIcon}
            </span>
          ))
        : [...Array(numberOfRating)].map(() => (
            <span
              key=""
              className={ratingIconClassname || 'star'}
              style={{
                color: progressFilledColor || '#ebcf31'
              }}>
              <AiFillStar />
            </span>
          ))}
    </div>
  );
}

export default FilledStarRating;
