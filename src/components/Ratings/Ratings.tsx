import React from 'react';
import StarRating from '../StarRating/StarRating';
import classes from './ratings.module.css';
import { RatingsProps } from '../../Types/Ratings';
import RatingBars from '../RatingBars/RatingBars';

const Ratings = ({ data, showRatingHeader = false, options }: RatingsProps) => {
  return (
    <div className={classes.container}>
      <StarRating
        data={data}
        showRatingHeader={showRatingHeader}
        options={{
          filledColor: options?.filledColor,
          unfilledColor: options?.unfilledColor,
          ratingIconClassname: options?.ratingHeaderClassname,
          ratingHeaderClassname: options?.ratingHeaderClassname,
          FilledRatingIcon: options?.FilledRatingIcon,
          UnfilledRatingIcon: options?.UnfilledRatingIcon
        }}
      />
      <RatingBars
        data={data}
        options={{
          filledColor: options?.filledColor,
          unfilledColor: options?.unfilledColor,
          classname: options?.classname,
          progressPercentage: options?.progressPercentage,
          progressBarText: options?.progressBarText,
          onClick: options?.onClick
        }}
      />
    </div>
  );
};

export default Ratings;
