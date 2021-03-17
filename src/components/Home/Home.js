import React, { Component } from 'react';
import classes from './Home.module.css';
import img from '../../assets/images/imgbg.jpeg';
import SocialIcons from '../UI/Icon/Icon';

class Home extends Component {
  render() {
    return (
      <main className={classes.Home} id='home'>
        <div className={classes.MainImage}>
          <img src={img} alt='' />
        </div>
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
          <div className={classes.Icons}>
            <SocialIcons
              iconName={'FaGithub'}
              link={'https://github.com/Izabela88'}
            />
            <SocialIcons
              iconName={'FaLinkedin'}
              link={'https://www.linkedin.com/in/izabela-krupinska-161a351a5/'}
            />
            <SocialIcons
              iconName={'FaFacebook'}
              link={'https://www.facebook.com/izabela.krupinska.77/'}
            />
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
