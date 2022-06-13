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
    }
  ];

  const showRatingHeader = true;
  const progressFilledColor = '#656bdf';
  const progressUnfilledColor = '#243565';
  const ratingIconClassname = 'custom';
  const ratingHeaderClassname = 'header';
  const customRatingHeader = (percentage: number) => <p>hello {percentage}</p>;

  return (
    <div style={{ width: '500px', padding: '10px' }}>
      <Ratings
        data={data}
        showRatingHeader={showRatingHeader}
        progressFilledColor={progressFilledColor}
        progressUnfilledColor={progressUnfilledColor}
        ratingIconClassname={ratingIconClassname}
        ratingHeaderClassname={ratingHeaderClassname}
        FilledRatingIcon={<BsCircleFill />}
        UnfilledRatingIcon={<BsCircle />}
        progressBarText={'stars'}
        progressBarClassname="progress-container"
        onProgressClick={(item) => {
          console.log('test', item);
        }}
        customRatingHeader={customRatingHeader}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
