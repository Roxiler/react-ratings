/*eslint-disable*/
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

  const ProgressPerecent = (percent) => <div>{Math.ceil(percent)} %% </div>;
  const ProgressBarText = (data) => <div>{`${data.rating} rating`} </div>;

  return (
    <div style={{ width: '500px', padding: '10px' }}>
      <Ratings
        data={data}
        options={{
          showRatingHeader,
          // progressPercentage: ProgressPerecent
          progressBarText: ProgressBarText,
          className: 'progress-container',
          filledColor: progressFilledColor,
          unfilledColor: progressUnfilledColor,
          onProgressBarClick: (item) => {
            console.log('test', item);
          },
          ratingIconClassname: ratingIconClassname,
          ratingHeaderClassname: ratingHeaderClassname
          // FilledRatingIcon: <BsCircleFill />,
          // UnfilledRatingIcon: <BsCircle />
        }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
