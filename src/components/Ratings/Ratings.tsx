import React from 'react';
import { clsx } from '../../utilis/clsx';
import StarRating from '../StarRating/StarRating';
import classes from './ratings.modules.css';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { RatingsProps } from '../../Types/Ratings';
import RatingBars from '../RatingBars/RatingBars';

const Ratings = ({
  containerClassname = '',
  data,
  showRatingHeader = false,
  progressFilledColor = '',
  progressUnfilledColor = '',
  ratingIconClassname = '',
  ratingHeaderClassname = '',
  FilledRatingIcon = <AiFillStar />,
  UnfilledRatingIcon = <AiOutlineStar />,
  progressBarText = '',
  progressBarClassname = '',
  ratingHeaderTextClassname = '',
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
        ratingHeaderClassname={ratingHeaderClassname}
        FilledRatingIcon={FilledRatingIcon}
        UnfilledRatingIcon={UnfilledRatingIcon}
        ratingHeaderTextClassname={ratingHeaderTextClassname}
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
