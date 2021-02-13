import React, { Component } from 'react';
import classes from './Skills.module.css';
import Carousel from '../UI/Carousel/Carousel';
import imgA from '../../assets/images/pex-1.jpg';

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
          <h1>my skills.</h1>
        </div>
        <Carousel />
      </section>
    );
  }
}

export default Skills;
