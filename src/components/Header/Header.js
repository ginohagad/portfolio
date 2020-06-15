import React from 'react';
import styles from './Header.module.css'



const Header = (props) => {

  const { title } = props;

  return (
    <div className={styles.header}>
      <div className="container">
        <h1>{title}</h1>  
      </div>
    </div>
  )
}


export default Header;
