import React, { Component } from 'react';

import {Sidenav, Top, About, Projects, Skills, Contact} from './components';


class App extends Component {


  render() {

   const about_content = {
      caption: '"About Gino Hagad"',
      content: 'I am a freelance Front-end Web Developer and a Bachelor of Information and Communications Technology graduate based in Wellington City, New Zealand. I build websites and web apps that are fast, easy to use and coded with the same eye for detail as a designer.',
    };

    return (
      <div className="main-container">
        <Sidenav />
        <Top />
        <About content={about_content} />
				<Projects />
				<Skills />
				<Contact />
      </div>
    )
  }
}


export default App;
