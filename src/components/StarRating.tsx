import React from 'react';
import UnfilledStartRating from './UnfilledStartRating';
import '../styles/starRating.css';

interface data {
  count: number;
  rating: number;
}

interface Props {
  data: Array<data>;
  showRatingHeader: boolean;
  progressFilledColor: string;
  progressUnfilledColor: string;
  ratingIconClassname?: any;
  FilledRatingIcon?: any;
  UnfilledRatingIcon?: any;
}

function StarRating(props: Props) {
  const {
    data,
    showRatingHeader,
    progressFilledColor,
    progressUnfilledColor,
    ratingIconClassname,
    FilledRatingIcon,
    UnfilledRatingIcon
  } = props;
  const numberOfRating = Math.max(...data.map(data => data.rating));
  let totalCount = 0;
  totalCount = data.reduce((acc, obj) => acc + obj.count, 0);
  const per: any = {};
  let totalPercentage = 0;
  let starPercentageRounded: any = ``;

  data.map(rating => {
    const perOfIndividual = rating.count / totalCount;
    const key = `${rating.rating}`;
    per[key] = perOfIndividual;
  });

  for (let x in per) {
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
