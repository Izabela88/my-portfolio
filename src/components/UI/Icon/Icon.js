import React, { createElement } from 'react';
import classes from './Icon.module.css';
import * as FontAwesome from 'react-icons/fa';

const Icon = (props) => {
  const { iconName } = props;
  const icon = createElement(FontAwesome[iconName]);
  return (
    <a
      className={classes.Icon}
      href={props.link}
      target='_blank'
      rel='noopener noreferrer'
    >
      {icon}
    </a>
  );
};

export default Icon;
