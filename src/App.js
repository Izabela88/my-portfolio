import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import SinglePost from './components/SinglePost/SinglePost';
import Post from './components/Post/Post';
import Project from './components/Project/Project';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={About} path='/about' />
          <Route component={SinglePost} path='/post/:slug' />
          <Route component={Post} path='/post' />
          <Route component={Project} path='/project' />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
