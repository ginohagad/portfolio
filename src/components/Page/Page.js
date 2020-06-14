import React from 'react';
import {Header} from '../';



const Page = (props) => {
  const {title} = props;
  const title_id = title.toLowerCase();

  return (
    <section id={title_id} className="section container fullpage">
      <Header title={title} />
      {props.children}
    </section>
  )
}

export default Page;
