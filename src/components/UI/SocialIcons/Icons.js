import React from 'react';
import classes from './Icons.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const icons = () => (
  <div className={classes.Icons}>
    <a
      className={classes.Icon}
      rel='noreferrer'
      target='_blank'
      href='https://www.linkedin.com/in/izabela-krupinska-161a351a5/'
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a
      className={classes.Icon}
      rel='noreferrer'
      target='_blank'
      href='https://www.facebook.com/izabela.krupinska.77/'
    >
      <FontAwesomeIcon icon={faFacebookF} />
    </a>
    <a
      className={classes.Icon}
      rel='noreferrer'
      target='_blank'
      href='https://github.com/Izabela88'
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
  </div>
);

export default icons;
