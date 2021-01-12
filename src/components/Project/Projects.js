import React, { Component } from 'react';
import classes from './Projects.module.css';

class Project extends Component {
  render() {
    return (
      <div className={classes.Projects} id='projects'>
        <h1>Projects</h1>
      </div>
    );
  }
}

export default Project;
