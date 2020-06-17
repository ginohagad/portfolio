import React from 'react';
import {Page} from '../';

const About = (props) => {
  const { caption, content } = props.content;


  return (
    <Page title="About">
      <div className="about">
        <h4>{caption}</h4>
        <p>{content}</p>
      </div>
    </Page>
  )
}



export default About;
