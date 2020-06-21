import React from 'react';
import {Page} from '../';
import html5 from '../../images/web/html5.png';
import css3 from '../../images/web/css3.png';
import javascript from '../../images/web/javascript.png';
import react from '../../images/web/react.png';
import nodejs from '../../images/web/nodejs.png';
import materialize from '../../images/web/materialize.png';
import bootstrap from '../../images/web/bootstrap.png';
import sass from '../../images/web/sass.png';

const Skills = () => {

	const images = [
		{
			id: 1,
			src: html5,
			title: 'HTML5',
		},
		{
			id: 2,
			src: css3,
			title: 'CSS3',
		},
		{
			id: 3,
			src: javascript,
			title: 'Javascript',
		},
		{
			id: 4,
			src: sass,
			title: 'Sass',
		},
		{
			id: 5,
			src: bootstrap,
			title: 'Bootstrap',
		},
		{
			id: 6,
			src: materialize,
			title: 'Materialize',
		},
		{
			id: 7,
			src: nodejs,
			title: 'NodeJS',
		},
		{
			id: 8,
			src: react,
			title: 'React',
		},
	];

  return (
    <Page title="Skills">
      <div className="card horizontal">
				{images.map(({id, src, title}, idx) => 
					<div className="card-image">
						<img className="web_logos" src={src} alt="HTML Logo" />
						<div className="card-content">
							<div className="row text-center">
								<span className="card-title">{title}</span>
							</div>
						</div>
					</div>
				)}
      </div>
    </Page>
  )
}


export default Skills;
