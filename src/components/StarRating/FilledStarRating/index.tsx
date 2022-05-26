import React from 'react';
import '../../../styles/filled.css';
import { Data } from '../../../Types/Data';
import { clsx } from '../../../utilis/clsx';
import { starColors } from '../../../Consts/colors';

interface Props {
  data: Data[];
  progressFilledColor?: string;
  ratingIconClassname?: string;
  FilledRatingIcon: React.ElementType;
  width: string;
}

// eslint-disable-next-line
function FilledStarRating(props: Props) {
  const {
    data,
    progressFilledColor = '',
    ratingIconClassname = '',
    FilledRatingIcon,
    width
  } = props;
  const numberOfRating = Math.max(...data.map((data) => data.rating));
  return (
    <div className="filled" style={{ width }}>
      {[...Array(numberOfRating)].map((_, i) => (
        <span
          key={`unfilled-star custom icon ${i}`}
          className={clsx('star', ratingIconClassname)}
          style={{
            color: progressFilledColor || starColors.filled
          }}>
          <FilledRatingIcon />
        </span>
      ))}
    </div>
  );
}

export default FilledStarRating;
