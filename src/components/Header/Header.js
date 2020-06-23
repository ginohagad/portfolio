import React from 'react';


const Header = (props) => {

  const { title } = props;

  return (
    <div className="header">
      <div className="container">
        <h1>{title}</h1>  
      </div>
    </div>
  )
}


export default Header;
