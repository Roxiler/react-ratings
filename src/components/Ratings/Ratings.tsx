import React from 'react';
import { clsx } from '../../utilis/clsx';
import StarRating from '../StarRating/StarRating';
import classes from './ratings.modules.css';
import { BsCircleFill, BsCircle } from 'react-icons/bs';
import { RatingsProps } from '../../Types/Ratings';
import RatingBars from '../RatingBars/RatingBars';

const Ratings = ({
  containerClassname = '',
  data,
  showRatingHeader = false,
  progressFilledColor = '',
  progressUnfilledColor = '',
  ratingIconClassname = '',
  FilledRatingIcon = BsCircleFill,
  UnfilledRatingIcon = BsCircle,
  progressBarText = '',
  progressBarClassname = '',
  onProgressClick
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
      <RatingBars
        data={data}
        progressFilledColor={progressFilledColor}
        progressUnfilledColor={progressUnfilledColor}
        progressBarText={progressBarText}
        progressBarClassname={progressBarClassname}
        onProgressClick={onProgressClick}
      />
    </div>
  );
};

export default Ratings;
