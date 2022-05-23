import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Ratings } from '../src';
import { BsCircleFill, BsCircle } from 'react-icons/bs';

const App = () => {
  const data = [
    {
      count: 6,
      rating: 3
    },
    {
      count: 6,
      rating: 4
    }
  ];

  const showRatingHeader = true;
  const progressFilledColor = 'yellow';
  const progressUnfilledColor = 'yellow';
  const ratingIconClassname = 'custom';

  return (
    <div>
      <Ratings
        data={data}
        showRatingHeader={showRatingHeader}
        progressFilledColor={progressFilledColor}
        progressUnfilledColor={progressUnfilledColor}
        ratingIconClassname={ratingIconClassname}
        FilledRatingIcon={BsCircleFill}
        UnfilledRatingIcon={BsCircle}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
