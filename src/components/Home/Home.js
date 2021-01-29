import React, { Component } from 'react';
import classes from './Home.module.css';
import img from '../../assets/images/imgbg.jpeg';
import Icons from '../UI/SocialIcons/Icons';

class Home extends Component {
  render() {
    return (
      <main className={classes.Home} id='home'>
        <img className={classes.MainImage} src={img} alt='' />
        <section className={classes.MainText}>
          <div className={classes.BoxOne}>
            <h1>
              <span className={classes.Span}>Hello!</span>
              <br />
              I'm Izabela. <br />
            </h1>
            <h5>Junior Frontend Developer</h5>
          </div>
          <div className={classes.BoxTwo}>
            <p>
              Welcome to my portfolio website. <br /> Let's see what we've got
              here...
            </p>
          </div>
          <Icons />
        </section>
      </main>
    );
  }
}

export default Home;
