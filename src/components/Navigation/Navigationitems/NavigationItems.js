import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem id='home'>Home</NavigationItem>
    <NavigationItem id='about'>About</NavigationItem>
    <NavigationItem id='projects'>Projects</NavigationItem>
    <NavigationItem id='contact'>Contact</NavigationItem>
  </ul>
);

export default navigationItems;
