import React, { Component } from 'react';
import classes from './Skills.module.css';
import Carousel from '../UI/Carousel/Carousel';
import imgA from '../../assets/images/pex-1.jpg';
import Fade from 'react-reveal/Fade';

class Skills extends Component {
  render() {
    return (
      <section
        style={{
          backgroundImage: `url(${imgA})`,
        }}
        className={classes.Skills}
        id='skills'
      >
        <div className={classes.SectionHeading}>
          <Fade duration={4000}>
            <h1>my skills.</h1>
          </Fade>
        </div>
        <Carousel />
      </section>
    );
  }
}

export default Skills;
