import React, { Component } from 'react';
import classes from './Skills.module.css';
import Carousel from '../UI/Carousel/Carousel';

class Skills extends Component {
  render() {
    return (
      <section className={classes.Skills} id='skills'>
        <div className={classes.SectionHeading}>
          <h1>my skills.</h1>
        </div>
        <Carousel />
      </section>
    );
  }
}

export default Skills;
