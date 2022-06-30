import React from 'react';
import './filled.css';
import { Data } from '../../../Types/Data';
import { clsx } from '../../../utilis/clsx';
import { starColors } from '../../../Consts/colors';

interface Props {
  data: Data[];
  filledColor?: string;
  ratingIconClassname?: string;
  FilledRatingIcon: React.ReactElement;
  width: string;
}

// eslint-disable-next-line
function FilledStarRating(props: Props) {
  const { data, filledColor = '', ratingIconClassname = '', FilledRatingIcon, width } = props;
  const numberOfRating = Math.max(...data.map((data) => data.rating));

  return (
    <div className={'filled'} style={{ width }}>
      {[...Array(numberOfRating)].map((_, i) => (
        <span
          key={`unfilled-star custom icon ${i}`}
          className={clsx('star', ratingIconClassname)}
          style={{
            color: filledColor || starColors.filled
          }}
        >
          {FilledRatingIcon}
        </span>
      ))}
    </div>
  );
}

export default FilledStarRating;
