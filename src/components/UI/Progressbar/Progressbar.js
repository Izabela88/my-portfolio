import React from 'react';
import ProgressBar from 'react-animated-progress-bar';
import classes from './Progressbar.module.css';

const progressbar = (props) => (
  <div className={classes.ProgressbarClass}>
    <div className={classes.ProgressbarBox}>
      <ProgressBar
        width='200'
        fontColor='#ffb3a4'
        trackPathColor='transparent'
        trackBorderColor='#ffb3a4'
        hollowBackgroundColor='transparent'
        trackWidth='30'
        percentage='80'
        defColor={{
          fair: ' #ffb3a4',
          good: ' #ffb3a4',
          excellent: ' #ffb3a4',
          poor: ' #ffb3a4',
        }}
      />
    </div>
    <div className={classes.ProgressbarBox}>
      <ProgressBar
        width='200'
        fontColor='#ffb3a4'
        trackPathColor='transparent'
        trackBorderColor='#ffb3a4'
        hollowBackgroundColor='transparent'
        trackWidth='30'
        percentage='40'
        defColor={{
          fair: ' #ffb3a4',
          good: ' #ffb3a4',
          excellent: ' #ffb3a4',
          poor: ' #ffb3a4',
        }}
      />
    </div>
    <div className={classes.ProgressbarBox}>
      <ProgressBar
        width='200'
        fontColor='#ffb3a4'
        trackPathColor='transparent'
        trackBorderColor='#ffb3a4'
        hollowBackgroundColor='transparent'
        trackWidth='30'
        percentage='50'
        defColor={{
          fair: ' #ffb3a4',
          good: ' #ffb3a4',
          excellent: ' #ffb3a4',
          poor: ' #ffb3a4',
        }}
      />
    </div>
  </div>
);

export default progressbar;
