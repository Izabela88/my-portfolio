import React, { Component } from 'react';
import classes from './Contact.module.css';
import img from '../../assets/images/contact-img.jpeg';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Schema = Yup.object().shape({
  name: Yup.string().required('Required'),
  subject: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email!').required('Required'),
  message: Yup.string().max(600).required('Required'),
});

class Contact extends Component {
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
              Here is how you can reach me: <br /> izabkru88@gmail.com <br />
              +44 7868197008
            </p>
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
              }).then((response) => {
                if (response.data.status === 'sent') {
                  alert('Message Sent');
                  this.setState({
                    name: '',
                    subject: '',
                    email: '',
                    message: '',
                  });
                } else if (response.data.status === 'failed') {
                  alert('Message has not been sent.');
                }
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
                    className={classes.InputElement}
                    name='message'
                    type='message'
                    placeholder='Enter Message'
                  />
                  {errors.message && touched.message ? (
                    <div className={classes.Error}>{errors.message}</div>
                  ) : null}
                  <button className={classes.ContactBtn} type='submit'>
                    Submit
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
