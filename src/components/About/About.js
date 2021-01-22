import React, { Component } from 'react';
import classes from './About.module.css';
import imgAbout from '../../assets/images/img-about.jpeg';
import Progressbar from '../UI/Progressbar/Progressbar';

class About extends Component {
  render() {
    return (
      <div className={classes.About} id='about'>
        <img src={imgAbout} className={classes.AboutImg} alt='' />
        <div className={classes.AboutText}>
          <h1>About Me .</h1>
          <p>
            I did a lot of things in my life, I was a sales representative, pub
            manager, and even a physical worker in a warehouse where I was the
            only girl on a shift. However, for a long time I did not know what
            to do in my life, I couldn't find my path until I finally came
            across programming by accident. <br />
            <br /> I started my adventure with programming at the end of 2019
            and since then I am sure that this is what I want to do in my life.
            I mainly focus on the frontend: JavaScript, React.js, CSS, because I
            have an artistic soul and thanks to this activity I can use my
            creativity. So far, I study alone at home, but my dream and main
            goal is to find a job in a company where I could become a part of a
            professional team and build a long-term career. <br />
            <br /> I am a determined person who likes challenges and I always
            give 200% of myself to achieve the intended goal.
          </p>
        </div>
        <button className={classes.AboutButton}>My CV</button>
        <div className={classes.Progressbar}>
          <Progressbar />
        </div>
      </div>
    );
  }
}

export default About;
