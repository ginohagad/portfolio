import React from 'react';


const Sidenav = () => {
  return (
    <div className="hide-on-small-only">
      <ul id="nav-mobile" className="sidenav sidenav-fixed">
        <a href="#home">
          <li className="logo">
            <h3>Gerardo Hagad</h3>
            <span>Web Developer</span>
          </li>
        </a>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
      </ul>
    </div>
  )
}


export default Sidenav;
