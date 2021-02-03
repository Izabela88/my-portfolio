import React, { Component } from 'react';

// import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Layout from './components/Layout/Layout';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Layout>
      </div>
    );
  }
}

export default App;
