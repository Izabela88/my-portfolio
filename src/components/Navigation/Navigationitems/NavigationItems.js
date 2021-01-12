import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/' id='home' exact>
      Home
    </NavigationItem>
    <NavigationItem link='/about' id='about'>
      About
    </NavigationItem>
    <NavigationItem link='/projects' id='projects'>
      Projects
    </NavigationItem>
  </ul>
);

export default navigationItems;
