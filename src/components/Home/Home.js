import React, { Component } from 'react';
import classes from './Home.module.css';
import img1 from '../../assets/images/img1.jpg';

class Home extends Component {
  render() {
    return (
      <div className={classes.Home} id='home'>
        <img src={img1} alt='home' />
      </div>
    );
  }
}

export default Home;
