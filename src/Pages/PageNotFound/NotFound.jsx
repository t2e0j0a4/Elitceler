import React from 'react'
import styles from "./NotFound.module.css";
import { Link } from 'react-router-dom';

const NotFound = () => {

  const {page__error} = styles;

  return (
    <div className={page__error}>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to='/'><ion-icon name='chevron-back'></ion-icon> <span>Back Home</span></Link>
    </div>
  )
}

export default NotFound