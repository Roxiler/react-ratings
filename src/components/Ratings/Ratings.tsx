import React from 'react';
import { clsx } from '../../utilis/clsx';
import StarRating from '../StarRating';
import classes from './ratings.modules.css';
import { BsCircleFill, BsCircle } from 'react-icons/bs';
import { RatingsProps } from '../../Types/Ratings';
import Rating from '../Rating';

const Ratings = ({
  containerClassname = '',
  data,
  showRatingHeader = false,
  progressFilledColor = 'red',
  progressUnfilledColor = 'red',
  ratingIconClassname = '',
  FilledRatingIcon = BsCircleFill,
  UnfilledRatingIcon = BsCircle
}: RatingsProps) => {
  return (
    <div className={clsx(classes.container, containerClassname)}>
      <StarRating
        data={data}
        showRatingHeader={showRatingHeader}
        progressFilledColor={progressFilledColor}
        progressUnfilledColor={progressUnfilledColor}
        ratingIconClassname={ratingIconClassname}
        FilledRatingIcon={FilledRatingIcon}
        UnfilledRatingIcon={UnfilledRatingIcon}
      />
      <Rating data={data} />
    </div>
  );
};

export default Ratings;
