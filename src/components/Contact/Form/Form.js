import React, { useState } from 'react';
import classes from './Form.module.css';
import Modal from '../../UI/Modal/Modal';
import { useForm } from 'react-hook-form';
import gif from '../../../assets/images/gif8.gif';

export default function ContactForm(props) {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm();

  const submitRequestSuccess = async (data, e) => {
    e.preventDefault();
    // console.log('submit request executed');

    // console.log(data);
    const response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      showModalHandler();
    } else {
      alert('Message not sent!');
    }
  };

  return (
    <form onSubmit={handleSubmit(submitRequestSuccess)}>
      {showModal && (
        <Modal onClose={hideModalHandler}>
          <div className={classes.message}>
            <p>
              Thank you for your message! :)
              <br /> I will contact you as soon as possible!
            </p>
            <div className={classes.image}>
              <img src={gif} alt='' />
            </div>
          </div>
        </Modal>
      )}
      <div className={classes.ContactBox}>
        <div className={classes.ContactQuestion}>
          <p>Any questions?</p>
        </div>

        <input
          {...register('name', {
            validate: (value) => value.length > 2 && value.length < 20,
            pattern: /^[A-Za-z]+$/i,
            required: true,
            isSubmitting: true,
          })}
          className={classes.InputElement}
          name='name'
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        {errors.name && (
          <div className={classes.err}>
            <p>Wrong Name!</p>
          </div>
        )}

        <input
          {...register('subject', {
            validate: (value) => value.length > 2 && value.length < 20,
            pattern: /^[A-Za-z]+$/i,
            required: true,
            isSubmitting: true,
          })}
          className={classes.InputElement}
          name='subject'
          placeholder='Subject'
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        />
        {errors.subject && (
          <div className={classes.err}>
            <p>Wrong Subject!</p>
          </div>
        )}

        <input
          {...register('email', {
            required: true,
          })}
          className={classes.InputElement}
          name='email'
          type='email'
          placeholder='Email Address'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {errors.message && (
          <div className={classes.err}>
            <p>Required!</p>
          </div>
        )}

        <textarea
          {...register('message', {
            required: true,
            validate: (value) => value.length > 2 && value.length < 500,
          })}
          className={`${classes.InputElement} ${classes.TextElement}`}
          name='message'
          type='message'
          placeholder='Enter Message'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        {errors.message && (
          <div className={classes.err}>
            <p>Required!</p>
          </div>
        )}

        <button
          onClick={props.onClick}
          disabled={!isDirty}
          className={`${classes.ContactBtn} ${classes.Effect}`}
          type='submit'
        >
          <span>Send Message</span>
        </button>
      </div>
    </form>
  );
}
