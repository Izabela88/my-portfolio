import React from 'react';
import myLogo from '../../assets/images/logo1.png';
import classes from './Logo.module.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={myLogo} alt='Logo' />
  </div>
);

export default logo;
