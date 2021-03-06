import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

class SideDrawer extends Component {
  render() {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (this.props.open) {
      attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
      <Auxiliary>
        <div className={attachedClasses.join(' ')}>
          <nav>
            <NavigationItems />
          </nav>
        </div>
      </Auxiliary>
    );
  }
}

export default SideDrawer;
