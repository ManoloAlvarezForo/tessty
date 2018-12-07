import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Routes from './Routes/Routes';

import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

export default hot(module)(App);