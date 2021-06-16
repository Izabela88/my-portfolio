import React, { useState } from 'react';
import classes from './Form.module.css';
import Modal from '../../UI/Modal/Modal';
import useModal from '../../UI/Modal/useModal';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';

// const Schema = Yup.object().shape({
//   name: Yup.string().max(40).required('Required'),
//   subject: Yup.string().max(50).required('Required'),
//   email: Yup.string().email('Invalid email!').required('Required'),
//   message: Yup.string().max(600).required('Required'),
// });

export default function ContactForm() {
  const { isShowing, toggle } = useModal();
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleClose = () => setShow(false);

  const submitRequest = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name, subject, email, message }),
    });

    const resData = await response.json();
    if (resData.status === 'success') {
      setShow(true);
    } else if (resData.status === 'fail') {
      alert('Message failed to send.');
    }
  };

  return (
    <form onSubmit={submitRequest}>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        show={show}
        onHide={handleClose}
      />
      <div className={classes.ContactBox}>
        <div className={classes.ContactQuestion}>
          <p>Any questions?</p>
        </div>

        <input
          className={classes.InputElement}
          name='name'
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className={classes.InputElement}
          name='subject'
          placeholder='Subject'
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        />

        <input
          className={classes.InputElement}
          name='email'
          type='email'
          placeholder='Email Address'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className={`${classes.InputElement} ${classes.TextElement}`}
          name='message'
          type='message'
          placeholder='Enter Message'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <button
          className={`${classes.ContactBtn} ${classes.Effect}`}
          type='submit'
          onClick={toggle}
        >
          <span>Send Message</span>
        </button>
      </div>
    </form>
  );
}
