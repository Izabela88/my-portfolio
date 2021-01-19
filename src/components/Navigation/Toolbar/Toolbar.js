import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import HamburgerIcon from '../SideDrawer/HamburgerIcon/HamburgerIcon';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <HamburgerIcon clicked={props.hamburgerIconClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
