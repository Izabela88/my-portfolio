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
          <h1>Hi ! I'm Izabela ! I'm so glad you're here !</h1>
          <p>
            Welcome on my site! <br /> I'm glad you want to get to know me and
            my projects. I hope you will enjoy watching my work. Have fun! :)
            <br /> <br />
            And now, let's see what we've got here...
          </p>
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
