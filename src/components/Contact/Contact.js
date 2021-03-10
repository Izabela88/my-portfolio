import React, { Component } from 'react';
import classes from './Contact.module.css';
import img from '../../assets/images/contact-img.jpeg';
import Button from '../UI/Button/Button';
import axios from 'axios';
import Input from '../UI/Input/Input';

class Contact extends Component {
  state = {
    name: '',
    subject: '',
    email: '',
    phone: '',
    message: '',
    status: 'Submit',
  };

  handleChange(event) {
    event.preventDefault();
    const field = event.target.id;
    if (field === 'name') {
      this.setState({ name: event.target.value });
    } else if (field === 'subject') {
      this.setState({ subject: event.target.value });
    } else if (field === 'email') {
      this.setState({ email: event.target.value });
    } else if (field === 'phone') {
      this.setState({ phone: event.target.value });
    } else if (field === 'message') {
      this.setState({ message: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
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
          phone: '',
          message: '',
          status: 'Send',
        });
      } else if (response.data.status === 'failed') {
        alert('Message has not been sent.');
      }
    });
  }

  render() {
    let buttonText = this.state.status;

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
          <div className={classes.ContactBox}>
            <div className={classes.ContactQuestion}>
              <p>Any questions?</p>
            </div>
            <form
              className={classes.TextFields}
              onSubmit={this.handleSubmit.bind(this)}
              method='POST'
            >
              <Input
                inputtype='input'
                type='text'
                placeholder='Name'
                id='name'
                value={this.state.name}
                onChange={this.handleChange.bind(this)}
                required
              />
              <Input
                inputtype='input'
                type='text'
                placeholder='Subject'
                id='subject'
                value={this.state.subject}
                onChange={this.handleChange.bind(this)}
              />
              <Input
                inputtype='input'
                type='email'
                placeholder='Email Address'
                id='email'
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
              />
              <Input
                inputtype='input'
                type='text'
                placeholder='Phone Number'
                id='phone'
                value={this.state.phone}
                onChange={this.handleChange.bind(this)}
              />
              <Input
                inputtype='textarea'
                placeholder='Enter Message'
                id='message'
                value={this.state.message}
                onChange={this.handleChange.bind(this)}
              ></Input>
            </form>
          </div>
          <Button type='submit'>{buttonText}</Button>
        </div>
      </section>
    );
  }
}

export default Contact;
