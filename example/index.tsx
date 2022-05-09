import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';
import StarRating from '../src/components/StarRating';
import { BsCircleFill, BsCircle } from 'react-icons/bs';

const App = () => {
  const data = [
    {
      count: 5,
      rating: 3
    },
    {
      count: 6,
      rating: 4
    },
    {
      count: 2,
      rating: 2
    },
    {
      count: 2,
      rating: 1
    },
    {
      count: 3,
      rating: 2
    }
  ];

  const showRatingHeader = true;

  let totalRating = 0;

  data.map((rating) => {
    totalRating += totalRating + rating.rating;
  });

  const percentage = `${Math.round(totalRating / data.length) * data.length}%`;
  const progressFilledColor = 'red';
  const progressUnfilledColor = 'red';
  const ratingIconClassname = 'custom';
  const FilledRatingIcon = () => <BsCircleFill />;
  const UnfilledRatingIcon = () => <BsCircle />;
  return (
    <div>
      <StarRating
        data={data}
        starStyle={percentage}
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

ReactDOM.render(<App />, document.getElementById('root'));
