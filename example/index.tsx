import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Ratings, Rating, ProgressBar } from '../src';
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

  const show = true;
  const progressFilledColor = '#656bdf';
  const progressUnfilledColor = '#243565';
  const ratingIconClassname = 'custom';
  const className = 'header';
  // const headerText = (percentage: number) => <p>hello {percentage}</p>;

  // const ProgressPerecent = (percent) => <div>{Math.ceil(percent)} %% </div>;
  const ProgressBarText = (data) => <div>{`${data.rating} rating`} </div>;

  return (
    <div style={{ width: '500px', padding: '10px' }}>
      <Ratings
        data={data}
        options={{
          progressBar: {
            // percentage: ProgressPerecent
            progressBarText: ProgressBarText,
            className: 'progress-container',
            filledColor: progressFilledColor,
            unfilledColor: progressUnfilledColor,
            onClick: (item) => {
              console.log('test', item);
            }
            // FilledRatingIcon: <BsCircleFill />,
            // UnfilledRatingIcon: <BsCircle />
          },
          rating: {
            ratingIconClassname,
            className,
            show,
            // headerText,
            filledColor: progressFilledColor,
            unfilledColor: progressUnfilledColor
          }
        }}
      />

      <Rating
        data={data}
        options={{
          ratingIconClassname,
          className,
          show,
          // headerText,
          filledColor: progressFilledColor,
          unfilledColor: progressUnfilledColor
        }}
      />

      <ProgressBar
        data={data}
        options={{
          progressBarText: ProgressBarText,
          className: 'progress-container',
          filledColor: progressFilledColor,
          unfilledColor: progressUnfilledColor,
          onClick: (item) => {
            console.log('test', item);
          }
        }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
