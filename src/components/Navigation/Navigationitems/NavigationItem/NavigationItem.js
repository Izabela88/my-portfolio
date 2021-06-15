import React from 'react';
import classes from './NawigationItem.module.css';
import { Link } from 'react-scroll';

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <Link
      activeClass={classes.active}
      to={props.id}
      spy={true}
      smooth='easeInOutCubic'
      offset={-100}
      duration={1500}
    >
      {props.children}
    </Link>
  </li>
);

export default navigationItem;
