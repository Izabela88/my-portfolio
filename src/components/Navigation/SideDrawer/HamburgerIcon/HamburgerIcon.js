import React from 'react';
import classes from './HamburgerIcon.module.css';
import { Sling as Hamburger } from 'hamburger-react';

const hamburgerIcon = (props) => (
  <div onClick={props.clicked} className={classes.HamburgerIcon}>
    <Hamburger rounded duration={0.5} color='#fff' easing='ease-in' />
  </div>
);

export default hamburgerIcon;
