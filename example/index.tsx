import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { StarRating, Rating } from '../src';
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
  const data1 = [
    {
      value: 5,
      rating: 3
    },
    {
      value: 6,
      rating: 4
    },
    {
      value: 2,
      rating: 2
    },
    {
      value: 2,
      rating: 1
    },
    {
      value: 3,
      rating: 2
    }
  ];

  const showRatingHeader = true;
  const progressFilledColor = 'red';
  const progressUnfilledColor = 'red';
  const ratingIconClassname = 'custom';
  const FilledRatingIcon = () => <BsCircleFill />;
  const UnfilledRatingIcon = () => <BsCircle />;
  return (
    <div>
      <StarRating
        data={data}
        width="10rem"
        showRatingHeader={showRatingHeader}
        progressFilledColor={progressFilledColor}
        progressUnfilledColor={progressUnfilledColor}
        ratingIconClassname={ratingIconClassname}
        FilledRatingIcon={<FilledRatingIcon />}
        UnfilledRatingIcon={<UnfilledRatingIcon />}
      />
      <Rating data={data1} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
