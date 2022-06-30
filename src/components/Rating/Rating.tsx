import React from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import UnfilledStartRating from './UnfilledStarRating';
import classes from './starRating.module.css';
import { RatingHeaderType } from '../../Types/RatingHeader';
import { clsx } from '../../utilis/clsx';

interface PercentageObj {
  [key: string]: number;
}

// eslint-disable-next-line space-before-function-paren
function StarRating(props: RatingHeaderType) {
  const { data, options = {} } = props;
  const {
    filledColor,
    unfilledColor,
    ratingIconClassname,
    show = true,
    className = '',
    FilledRatingIcon = <AiFillStar />,
    UnfilledRatingIcon = <AiOutlineStar />,
    headerText
  } = options;

  const numberOfRating = Math.max(...data.map((data) => data.rating));
  const totalCount = data.reduce((acc, obj) => acc + obj.count, 0);
  const per: PercentageObj = {};
  let totalPercentage = 0;
  let starPercentageRounded = '';

  data.forEach((rating) => {
    const perOfIndividual = rating.count / totalCount;
    const key = `${rating.rating}`;
    per[key] = perOfIndividual;
  });

  for (const x in per) {
    totalPercentage += Number(x) * per[x];
  }
  const percentage = (Number(totalPercentage.toFixed(2)) / numberOfRating) * 100;
  starPercentageRounded = `${percentage}%`;
  return (
    <>
      {show && (
        <div className={classes.starRating}>
          <UnfilledStartRating
            data={data}
            filledColor={filledColor}
            unfilledColor={unfilledColor}
            ratingIconClassname={ratingIconClassname}
            FilledRatingIcon={FilledRatingIcon}
            UnfilledRatingIcon={UnfilledRatingIcon}
            width={starPercentageRounded}
          />
          {headerText?.(totalPercentage) || (
            <p className={clsx(classes.rating, className)}>
              {totalPercentage.toFixed(2)} out of {numberOfRating}
            </p>
          )}
        </div>
      )}
    </>
  );
}

export default StarRating;
