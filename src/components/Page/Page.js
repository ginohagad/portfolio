import React from 'react';
import {Header} from '../';



const Page = (props) => {
  const {title} = props;
  const title_id = title.toLowerCase();

  return (
    <section id={title_id} className="section fullpage">
      <Header title={title} />
      <div className="container">
        <div className="content">
          {props.children}
        </div>
      </div>
    </section>
  )
}

export default Page;
