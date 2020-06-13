import React from 'react';


const Sidenav = () => {
  return (
    <div className="hide-on-small-only">
      <ul id="nav-mobile" className="sidenav sidenav-fixed">
				<a href="#top">
					<li className="logo">
						<h3 className="teal-text">Gerardo Hagad</h3>
						<span>Web Developer</span>
					</li>
				</a>
        <li>
          <a href="#about" className="waves-effect waves-dark">
						<i className="fas fa-user small teal-text"></i>
						<span>About</span>
					</a>
        </li>
        <li>
          <a href="#projects" className="waves-effect waves-dark">
						<i className="fas fa-paperclip small indigo-text"></i>
						<span>Projects</span>
					</a>
        </li>
        <li>
          <a href="#skills" className="waves-effect waves-dark">
						<i className="fas fa-code small red-text"></i>
						<span>Skills</span>
					</a>
        </li>
        <li>
          <a href="#contact" className="waves-effect waves-dark">
						<i className="fas fa-envelope small brown-text"></i>
						<span>Contact</span>
					</a>
        </li>
      </ul>
    </div>
  )
}


export default Sidenav;
