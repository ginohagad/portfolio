import React, { Component } from 'react';

import {Sidenav, Top, About, Projects, Skills, Contact, Footer} from './components';


class App extends Component {


  render() {

   const about_content = {
      caption: '"Fulfilling your needs for web solutions..."',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt tortor a quam porttitor luctus. Fusce dictum enim id est maximus pulvinar. Sed venenatis, diam vitae fermentum euismod, quam magna maximus mauris, id aliquam nibh libero vitae augue. Suspendisse imperdiet eu metus ut molestie. Pellentesque mollis erat id metus volutpat mollis. Quisque aliquam ullamcorper malesuada. Etiam eu porta orci. Proin faucibus dignissim mattis. Nullam non consequat arcu. Sed malesuada est eu lacinia dignissim.',
    };

    return (
      <div className="main-container">
        <Sidenav />
        <Top />
        <About content={about_content} />
				<Projects />
				<Skills />
				<Contact />
				<Footer />
      </div>
    )
  }
}


export default App;
