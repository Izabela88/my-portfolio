import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import SinglePost from './components/SinglePost/SinglePost';
import Post from './components/Post/Post';
import Projects from './components/Project/Projects';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Home />
          <About />
          <Projects />
          <Switch>
            <Route component={SinglePost} path='/post/:slug' />
            <Route component={Post} path='/post' />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
