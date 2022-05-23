import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import '../styles/filled.css';
import { Data } from '../Types/Data';

interface Props {
  data: Data[];
  progressFilledColor?: string;
  ratingIconClassname?: string;
  FilledRatingIcon?: React.ElementType;
  width: string;
}

// eslint-disable-next-line
function FilledStarRating(props: Props) {
  const { data, progressFilledColor, ratingIconClassname, FilledRatingIcon, width } = props;
  const numberOfRating = Math.max(...data.map((data) => data.rating));
  return (
    <div className="filled" style={{ width }}>
      {FilledRatingIcon
        ? [...Array(numberOfRating)].map((_, i) => (
            <span
              key={`unfilled-star custom icon ${i}`}
              className={ratingIconClassname || 'star'}
              style={{
                color: progressFilledColor || '#ebcf31'
              }}>
              <FilledRatingIcon />
            </span>
          ))
        : [...Array(numberOfRating)].map((_, i) => (
            <span
              key={`unfilled-star default icon ${i}`}
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
