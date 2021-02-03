import React, { Component } from 'react';
import classes from './Contact.module.css';
import img from '../../assets/images/contact-img.jpeg';

class Home extends Component {
  render() {
    return (
      <section className={classes.Contact} id='contact'>
        <div className={classes.Container}>
          <div className={classes.ContactImg}>
            <img src={img} alt='' />
          </div>
          <div className={classes.ContactHeader}>
            <h1>contact.</h1>
          </div>
          <div className={classes.ContactText}>
            <p>
              Here is how you can reach me: <br /> izabkru88@gmail.com <br />{' '}
              +44 7868197008
            </p>
          </div>
          <div className={classes.ContactBox}>
            <div className={classes.ContactQuestion}>
              <p>Any questions?</p>
            </div>
            <form method='POST'>
              <div className={classes.TextFields}>
                <input
                  type='text'
                  className={(classes.TextInput, classes.NameInput)}
                  placeholder='Name'
                  name='name'
                />
                <input
                  type='text'
                  className={(classes.TextInput, classes.SubjectInput)}
                  placeholder='Subject'
                  name='subject'
                />
                <input
                  type='email'
                  className={(classes.TextInput, classes.EmailInput)}
                  placeholder='Email Address'
                  name='email'
                />
                <input
                  type='text'
                  className={(classes.TextInput, classes.PhoneInput)}
                  placeholder='Phone Number'
                  name='phone'
                />
                <textarea
                  className={(classes.TextInput, classes.MessageInput)}
                  placeholder='Enter Message'
                  name='message'
                ></textarea>
              </div>
              <button className={classes.ContactBtn} type='submit'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
