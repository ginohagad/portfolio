import React, { Component } from 'react';

import {Sidenav, Top, About, Projects, Skills, Contact, Footer} from './components';


class App extends Component {

  render() {
    return (
      <div className="main-container">
        <Sidenav />
        <Top />
        <About />
				<Projects />
				<Skills />
				<Contact />
				<Footer />
      </div>
    )
  }
}


export default App;
