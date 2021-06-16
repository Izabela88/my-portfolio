import React from 'react';
import classes from './Contact.module.css';
import img from '../../assets/images/img.jpg';

import icon1 from '../../assets/images/phone.svg';
import icon2 from '../../assets/images/email.svg';
import Fade from 'react-reveal/Fade';
import Form from './Form/Form';

function Contact() {
  return (
    <section
      className={classes.Contact}
      id='contact'
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className={classes.Container}>
        <Fade duration={3000}>
          <div className={classes.ContactHeader}>
            <h1>contact.</h1>
          </div>
        </Fade>
        <div className={classes.ContactText}>
          <p>
            izabkru88@gmail.com <br />
            +44 7868197008
          </p>
        </div>
        <div className={classes.EmailIcon}>
          <img src={icon2} alt='' />
        </div>
        <div className={classes.PhoneIcon}>
          <img src={icon1} alt='' />
        </div>
        <Form />
      </div>
    </section>
  );
}

export default Contact;
