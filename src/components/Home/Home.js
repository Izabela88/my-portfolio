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
        <section className={classes.MainText}>
          <h1>
            Hi! I'm Izabela ! <br /> I'm so glad you're here !
          </h1>
          <p>Let's see what we've got here...</p>
        </section>
        <section className={classes.MainSideText}>
          <p>Welcome on my board!</p>
        </section>
        <button className={classes.MainButton}>About Me</button>
      </main>
    );
  }
}

export default Home;
