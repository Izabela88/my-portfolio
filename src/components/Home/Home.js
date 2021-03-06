import React, { Component } from 'react';
import classes from './Home.module.css';
import img from '../../assets/images/imgbg.jpeg';
import Icon from '../UI/Icon/Icon';
import ScrollToButton from '../UI/ScrollToButton/ScrollToButton';
import Fade from 'react-reveal/Fade';

class Home extends Component {
  render() {
    return (
      <main className={classes.Home} id='home'>
        <div className={classes.MainImage}>
          <img src={img} alt='' />
        </div>
        <section className={classes.MainText}>
          <div className={classes.BoxOne}>
            <Fade top duration={3000}>
              <h1>
                <span className={classes.Span}>Hello!</span>
                <br />
                I'm Izabela. <br />
              </h1>
              <h5>Junior Frontend Developer</h5>
            </Fade>
          </div>
          <div className={classes.BoxTwo}>
            <Fade bottom duration={4000}>
              <p>
                Welcome to my portfolio website. <br /> Feel free to check my
                projects...
              </p>
            </Fade>
          </div>
          <div className={classes.ScrollButton}>
            <ScrollToButton id='projects'>
              <span></span>
            </ScrollToButton>
          </div>

          <div className={classes.Icons}>
            <Icon iconName={'FaGithub'} link={'https://github.com/Izabela88'} />
            <Icon
              iconName={'FaLinkedin'}
              link={'https://www.linkedin.com/in/izabela-krupinska-161a351a5/'}
            />
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
