import React from 'react';
import classes from './NawigationItem.module.css';
import { Link } from 'react-scroll';

const navigationItem = (props) => (
  <div className={classes.NavigationItem}>
    <Link
      activeClass={classes.active}
      to={props.id}
      spy={true}
      smooth={true}
      duration={1000}
    >
      {props.children}
    </Link>
  </div>
);

export default navigationItem;
