import React, { Component } from 'react';
import classes from './Contact.module.css';
import img from '../../assets/images/img0.jpg';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import icon1 from '../../assets/images/phone.svg';
import icon2 from '../../assets/images/email.svg';
import Fade from 'react-reveal/Fade';

const Schema = Yup.object().shape({
  name: Yup.string().max(40).required('Required'),
  subject: Yup.string().max(50).required('Required'),
  email: Yup.string().email('Invalid email!').required('Required'),
  message: Yup.string().max(600).required('Required'),
});

class Contact extends Component {
  render() {
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

          <Formik
            validationSchema={Schema}
            initialValues={{
              name: '',
              subject: '',
              email: '',
              message: '',
            }}
            onSubmit={(values) => {
              this.setState({ status: 'Sending' });
              axios({
                method: 'POST',
                url: 'http://localhost:5000/contact',
                data: this.state,
              })
                .then((response) => {
                  if (response.data.status === 'sent') {
                    alert('Message Sent');
                    this.setState({
                      name: values.name,
                      subject: values.subject,
                      email: values.email,
                      message: values.message,
                    });
                  } else if (response.data.status === 'failed') {
                    alert('Message has not been sent.');
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            }}
          >
            {({ errors, touched }) => (
              <div className={classes.ContactBox}>
                <div className={classes.ContactQuestion}>
                  <p>Any questions?</p>
                </div>
                <Form>
                  <Field
                    className={classes.InputElement}
                    name='name'
                    placeholder='Name'
                  />
                  {errors.name && touched.name ? (
                    <div className={classes.Error}>{errors.name}</div>
                  ) : null}
                  <Field
                    className={classes.InputElement}
                    name='subject'
                    placeholder='Subject'
                  />
                  {errors.subject && touched.subject ? (
                    <div className={classes.Error}>{errors.subject}</div>
                  ) : null}
                  <Field
                    className={classes.InputElement}
                    name='email'
                    type='email'
                    placeholder='Email Address'
                  />
                  {errors.email && touched.email ? (
                    <div className={classes.Error}>{errors.email}</div>
                  ) : null}

                  <Field
                    as='textarea'
                    className={`${classes.InputElement} ${classes.TextElement}`}
                    name='message'
                    type='message'
                    placeholder='Enter Message'
                  />
                  {errors.message && touched.message ? (
                    <div className={classes.Error}>{errors.message}</div>
                  ) : null}
                  <button
                    className={`${classes.ContactBtn} ${classes.Effect}`}
                    type='submit'
                  >
                    <span>Send Message</span>
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </section>
    );
  }
}

export default Contact;
