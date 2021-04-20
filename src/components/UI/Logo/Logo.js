import React from 'react';
import myLogo from '../../../assets/images/logo1.png';
import classes from './Logo.module.css';
import { Link } from 'react-scroll';

const logo = (props) => (
  <div className={classes.Logo}>
    <Link smooth='easeInOutCubic' offset={-100} duration={2000} to={props.id}>
      <img src={myLogo} alt='Logo' />
    </Link>
  </div>
);

export default logo;
