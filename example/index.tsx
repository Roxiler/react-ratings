import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BsCircle, BsCircleFill } from 'react-icons/bs';
import { Ratings } from '../src';
import './styles.css';
const App = () => {
  const data = [
    {
      count: 6,
      rating: 3
    },
    {
      count: 8,
      rating: 4
    },
    {
      count: 4,
      rating: 2
    },
    {
      count: 10,
      rating: 1
    }
  ];

  const showRatingHeader = true;
  const progressFilledColor = '#656bdf';
  const progressUnfilledColor = '#243565';
  const ratingIconClassname = 'custom';
  const ratingHeaderClassname = 'header';

  return (
    <div style={{ width: '500px', padding: '10px' }}>
      <Ratings
        data={data}
        showRatingHeader={showRatingHeader}
        progressFilledColor={progressFilledColor}
        progressUnfilledColor={progressUnfilledColor}
        ratingIconClassname={ratingIconClassname}
        ratingHeaderClassname={ratingHeaderClassname}
        FilledRatingIcon={BsCircleFill}
        UnfilledRatingIcon={BsCircle}
        progressBarText={'stars'}
        progressBarClassname="progress-container"
        onProgressClick={() => {
          console.log('test');
        }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
