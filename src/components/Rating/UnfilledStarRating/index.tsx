/*eslint-disable*/
import React from 'react';
import FilledStarRating from '../FilledStarRating';
import './Unfilled.css';
import { Data } from '../../../Types/Data';
import { clsx } from '../../../utilis/clsx';
import { starColors } from '../../../Consts/colors';

interface Props {
  data: Data[];
  filledColor?: string;
  unfilledColor?: string;
  ratingIconClassname?: string;
  FilledRatingIcon: React.ReactElement;
  UnfilledRatingIcon: React.ReactElement;
  width: string;
}

const StarRating = (props: Props) => {
  const {
    data,
    filledColor,
    unfilledColor,
    ratingIconClassname = '',
    FilledRatingIcon,
    UnfilledRatingIcon,
    width
  } = props;
  const numberOfRating = Math.max(...data.map((data) => data.rating));
  console.log({ numberOfRating });
  return (
    <div className={'unfilled'}>
      {[...new Array(numberOfRating).fill('_')].map((_, i) => (
        <span
          key={`unfilled-star custom icon ${i}`}
          // eslint-disable-next-line no-unneeded-ternary
          className={clsx('star', ratingIconClassname)}
          style={{
            // eslint-disable-next-line no-unneeded-ternary
            color: unfilledColor || starColors.unfilled
          }}
        >
          {unfilledColor ? FilledRatingIcon : UnfilledRatingIcon}
        </span>
      ))}
      <FilledStarRating
        data={data}
        filledColor={filledColor}
        ratingIconClassname={ratingIconClassname}
        FilledRatingIcon={FilledRatingIcon}
        width={width}
      />
    </div>
  );
};

export default StarRating;
