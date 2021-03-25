import React from 'react';
import classes from './HamburgerIcon.module.css';

const hamburgerIcon = (props) => (
  <div onClick={props.clicked} className={classes.HamburgerIcon}>
    <div></div>
  </div>
);

export default hamburgerIcon;
