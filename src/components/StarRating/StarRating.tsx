import React from 'react';
import UnfilledStartRating from './UnfilledStartRating';
import '../../styles/starRating.css';
import { RatingHeaderType } from '../../Types/RatingHeader';

interface PercentageObj {
  [key: string]: number;
}

// eslint-disable-next-line space-before-function-paren
function StarRating(props: RatingHeaderType) {
  const {
    data,
    showRatingHeader,
    progressFilledColor,
    progressUnfilledColor,
    ratingIconClassname,
    FilledRatingIcon,
    UnfilledRatingIcon
  } = props;
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
      {showRatingHeader && (
        <div className="starRating">
          <UnfilledStartRating
            data={data}
            progressFilledColor={progressFilledColor}
            progressUnfilledColor={progressUnfilledColor}
            ratingIconClassname={ratingIconClassname}
            FilledRatingIcon={FilledRatingIcon}
            UnfilledRatingIcon={UnfilledRatingIcon}
            width={starPercentageRounded}
          />
          <p className="rating">
            {totalPercentage.toFixed(2)} out of {numberOfRating}
          </p>
        </div>
      )}
    </>
  );
}

export default StarRating;