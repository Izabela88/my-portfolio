import React from 'react';
import classes from './CloseButton.module.css';
import img from '../../../../assets/images/close.png';

const closeButton = (props) => (
  <div>
    <img
      className={classes.CloseButton}
      onClick={props.clicked}
      src={img}
      alt=''
    />
  </div>
);

export default closeButton;
