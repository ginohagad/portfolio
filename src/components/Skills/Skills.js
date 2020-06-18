import React from 'react';
import {Page} from '../';
import images from '../../images';

const Skills = () => {

  return (
    <Page title="Skills">
      <div className="card horizontal">
        {images.map(({id, src, title}) => 
          <div className="card-image">
            <img className="web_logos" src={src} alt="HTML Logo" />
            <span className="card-title">{title}</span>
          </div>
        )}
      </div>
    </Page>
  )
}


export default Skills;
