import React, { Component } from 'react';

import {Sidenav, Home, About} from './components';


class App extends Component {

  render() {
    return (
      <div className="main-container">
        <Sidenav />
        <Home />
        <About />
      </div>
    )
  }
}


export default App;
