import React from 'react';
import UnfilledStartRating from './UnfilledStartRating';
import '../styles/starRating.css';

interface data {
  count: number;
  rating: number;
}

interface Props {
  data: Array<data>;
  starStyle: string;
  showRatingHeader: boolean;
  progressFilledColor: string;
  progressUnfilledColor: string;
  ratingIconClassname?: any;
  FilledRatingIcon?: any;
  UnfilledRatingIcon?: any;
}

function StarRating(props: Props) {
  let totalRating = 0;
  const {
    data,
    starStyle,
    showRatingHeader,
    progressFilledColor,
    progressUnfilledColor,
    ratingIconClassname,
    FilledRatingIcon,
    UnfilledRatingIcon
  } = props;
  data.map(rating => {
    totalRating += totalRating + rating.rating;
  });
  return (
    <>
      {showRatingHeader && (
        <div className="starRating">
          <UnfilledStartRating
            data={data}
            starStyle={starStyle}
            progressFilledColor={progressFilledColor}
            progressUnfilledColor={progressUnfilledColor}
            ratingIconClassname={ratingIconClassname}
            FilledRatingIcon={FilledRatingIcon}
            UnfilledRatingIcon={UnfilledRatingIcon}
          />
          <p className="rating">
            {(Math.round(totalRating / data.length) * data.length * data.length) / 100} out of{' '}
            {data.length}
          </p>
        </div>
      )}
    </>
  );
}

export default StarRating;
