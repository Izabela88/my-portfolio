import React from 'react';
import classes from './ProgressbarItems.module.css';
import ProgressbarItem from './ProgressbarItem/ProgressbarItem';

const progressbarItems = (props) => (
  <div className={classes.ProgressbarItems}>
    <ProgressbarItem value='80' />
    <ProgressbarItem value='40' />
    <ProgressbarItem value='60' />
    <ProgressbarItem value='50' />
    <ProgressbarItem value='70' />
    <ProgressbarItem value='80' />
  </div>
);

export default progressbarItems;
