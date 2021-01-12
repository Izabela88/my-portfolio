import React, { Component } from 'react';
import classes from './Home.module.css';

class Home extends Component {
  render() {
    return (
      <div className={classes.Home} id='home'>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
