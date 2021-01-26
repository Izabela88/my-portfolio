import React, { Component } from 'react';
import classes from './Home.module.css';
import img from '../../assets/images/imgbg.jpeg';

class Home extends Component {
  render() {
    return (
      <main className={classes.Home} id='home'>
        <img className={classes.MainImage} src={img} alt='' />
        <section className={classes.MainText}>
          <div className={classes.BoxOne}>
            <h1>
              I'm <br /> Izabela. <br />
            </h1>
            <h5>Junior Frontend Developer</h5>
          </div>
          <div className={classes.BoxTwo}>
            <p>
              This is my portfolio website. <br /> And now, let's see what we've
              got here...
            </p>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
