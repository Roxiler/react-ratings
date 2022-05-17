import React from 'react';
import { clsx } from '../../utilis/clsx';
import StarRating from '../StarRating';
import classes from './ratings.modules.css';
import { BsCircleFill, BsCircle } from 'react-icons/bs';

type Data = {
  count: number;
  rating: number;
};

type ContainerProps = {
  containerClassname?: string;
  data: Data[];
  showRatingHeader: boolean;
  progressFilledColor?: string;
  progressUnfilledColor?: string;
  ratingIconClassname?: string;
  FilledRatingIcon?: React.ElementType;
  UnfilledRatingIcon?: React.ElementType;
};

const Ratings = ({
  containerClassname = '',
  data,
  showRatingHeader = false,
  progressFilledColor = 'red',
  progressUnfilledColor = 'red',
  ratingIconClassname = '',
  FilledRatingIcon = BsCircleFill,
  UnfilledRatingIcon = BsCircle
}: ContainerProps) => {
  return (
    <div className={clsx(classes.container, containerClassname)}>
      <StarRating
        data={data}
        showRatingHeader={showRatingHeader}
        progressFilledColor={progressFilledColor}
        progressUnfilledColor={progressUnfilledColor}
        ratingIconClassname={ratingIconClassname}
        FilledRatingIcon={<FilledRatingIcon />}
        UnfilledRatingIcon={<UnfilledRatingIcon />}
      />
    </div>
  );
};

export default Ratings;
