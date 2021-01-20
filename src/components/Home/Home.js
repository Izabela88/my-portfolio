import React, { Component } from 'react';
import classes from './Home.module.css';
import img3 from '../../assets/images/img3.jpg';
import img1 from '../../assets/images/img7.jpg';

class Home extends Component {
  render() {
    return (
      <main className={classes.Home} id='home'>
        <img className={classes.MainImage} src={img3} alt='' />
        <img className={classes.MainImage1} src={img1} alt='' />
        <section className={classes.MainText}>
          <h1>
            Hello ! My name is Izabela ! <br /> I'm Frontend Developer .
          </h1>
          <p>
            Welcome on my board ! <br /> I'm so glad you are here ! I hope you
            will enjoy exploring my portfolio website . Have fun ! :)
            <br /> <br />
            And now, let's see what we've got here...
          </p>
        </section>
        <section className={classes.MainSideText}>
          <p>
            We' ve got some work to do... <hr />
          </p>
        </section>
        <button className={classes.MainButton}>About Me</button>
      </main>
    );
  }
}

export default Home;
