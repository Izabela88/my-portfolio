import React, { Component } from 'react';
import classes from './Skills.module.css';
import Carousel from '../UI/Carousel/Carousel';

class Skills extends Component {
  render() {
    return (
      <section className={classes.Skills} id='skills'>
        <div>
          <Carousel />
        </div>
      </section>
    );
  }
}

export default Skills;
