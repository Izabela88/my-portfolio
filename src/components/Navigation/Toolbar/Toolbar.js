import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../UI/Logo/Logo';
import HamburgerIcon from '../SideDrawer/HamburgerIcon/HamburgerIcon';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <HamburgerIcon
      clicked={props.hamburgerIconClicked}
      handleClick={props.handleClick}
    />
    <div className={classes.Logo}>
      <Logo id='home' />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
