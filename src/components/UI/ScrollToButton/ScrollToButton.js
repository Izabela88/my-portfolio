import classes from './ScrollToButton.module.css';
import React from 'react';
import { Link } from 'react-scroll';

const scrollToButton = (props) => (
  <div className={classes.ScrollToButton}>
    <Link smooth='easeInOutCubic' offset={-100} duration={1000} to={props.id}>
      {props.children}
    </Link>
  </div>
);

export default scrollToButton;
