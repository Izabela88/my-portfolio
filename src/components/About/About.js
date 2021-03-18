import React from 'react';
import classes from './About.module.css';
import imgbg from '../../assets/images/me.png';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';

const About = () => {
  return (
    <main className={classes.About} id='about'>
      <section className={classes.Container}>
        <div className={classes.AboutImg}>
          <img src={imgbg} alt='' />
        </div>
        <div className={classes.AboutHeader}>
          <h1>about me.</h1>
        </div>
        <div className={classes.BoxText}>
          <p>
            I did a lot of things in my life, I was a sales representative, pub
            manager, and even a physical worker in a warehouse where I was the
            only girl on a shift. However, for a long time I did not know what
            to do in my life, I couldn't find my path until I finally came
            across programming. <br />
            <br /> I started my adventure with programming at the end of 2019
            and since then I am sure that this is what I want to do in my life.
            I mainly focus on the frontend: JavaScript, React.js, CSS, because I
            have an artistic soul and thanks to this activity I can use my
            creativity. I'm self-taught, but my dream and main goal is to find a
            job in a company where I could become a part of a professional team
            and build a long-term career. <br />
            <br /> I am a determined person who likes challenges and I always
            give 200% of myself to achieve the intended goal.
          </p>
        </div>

        <div className={classes.DownloadLink}>
          <a href='/'>Download my CV</a>
          <div className={classes.Line}>
            <hr />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
