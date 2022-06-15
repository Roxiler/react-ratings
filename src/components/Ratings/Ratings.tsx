import React from 'react';
import StarRating from '../StarRating/StarRating';
import classes from './ratings.module.css';
import { RatingsProps } from '../../Types/Ratings';
import RatingBars from '../RatingBars/RatingBars';

const Ratings = ({ data, options }: RatingsProps) => {
  return (
    <div className={classes.container}>
      <StarRating
        data={data}
        options={{
          showRatingHeader: options?.showRatingHeader,
          filledColor: options?.filledColor,
          unfilledColor: options?.unfilledColor,
          ratingIconClassname: options?.ratingHeaderClassname,
          ratingHeaderClassname: options?.ratingHeaderClassname,
          FilledRatingIcon: options?.FilledRatingIcon,
          UnfilledRatingIcon: options?.UnfilledRatingIcon,
          customRatingHeader: options?.customRatingHeader
        }}
      />
      <RatingBars
        data={data}
        options={{
          filledColor: options?.filledColor,
          unfilledColor: options?.unfilledColor,
          className: options?.className,
          progressPercentage: options?.progressPercentage,
          progressBarText: options?.progressBarText,
          onProgressBarClick: options?.onProgressBarClick
        }}
      />
    </div>
  );
};

export default Ratings;
