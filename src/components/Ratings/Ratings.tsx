import React from 'react';
import StarRating from '../Rating/Rating';
import classes from './ratings.module.css';
import { RatingsProps } from '../../Types/Ratings';
import RatingBars from '../ProgressBar/ProgressBar';

const Ratings = ({
  data,
  options = {
    progressBar: {},
    rating: {}
  }
}: RatingsProps) => {
  const { progressBar, rating } = options;

  return (
    <div className={classes.container}>
      <StarRating
        data={data}
        options={{
          show: rating?.show,
          filledColor: rating?.filledColor,
          unfilledColor: rating?.unfilledColor,
          ratingIconClassname: rating?.className,
          className: rating?.className,
          FilledRatingIcon: rating?.FilledRatingIcon,
          UnfilledRatingIcon: rating?.UnfilledRatingIcon,
          headerText: rating?.headerText
        }}
      />
      <RatingBars
        data={data}
        options={{
          filledColor: progressBar?.filledColor,
          unfilledColor: progressBar?.unfilledColor,
          className: progressBar?.className,
          percentage: progressBar?.percentage,
          progressBarText: progressBar?.progressBarText,
          onClick: progressBar?.onClick
        }}
      />
    </div>
  );
};

export default Ratings;
