import React, { Component } from 'react';
import classes from './Home.module.css';
import img3 from '../../assets/images/img3.jpg';
import img1 from '../../assets/images/img-4.jpg';

class Home extends Component {
  render() {
    return (
      <main className={classes.Home} id='home'>
        <img className={classes.MainImage} src={img3} alt='' />
        <img className={classes.MainImage1} src={img1} alt='' />
        <div></div>
      </main>
    );
  }
}

export default Home;
