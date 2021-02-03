import React from 'react';
import ProgressBar from 'react-animated-progress-bar';
import classes from './ProgressbarItem.module.css';

const progressbarItem = (props) => (
  <div className={classes.ProgressbarItem}>
    <ProgressBar
      width='200'
      fontColor='#ffbe2d'
      trackPathColor='transparent'
      trackBorderColor='#ffbe2d'
      hollowBackgroundColor='transparent'
      trackWidth='30'
      percentage={props.value}
      defColor={{
        fair: ' #ffbe2d',
        good: ' #ffbe2d',
        excellent: ' #ffbe2d',
        poor: ' #ffbe2d',
      }}
    >
      {props.children}
    </ProgressBar>
  </div>
);

export default progressbarItem;
