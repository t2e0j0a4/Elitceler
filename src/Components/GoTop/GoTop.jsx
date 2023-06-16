import React from 'react'
import styles from "./GoTop.module.css";

const GoTop = ({comeToTop}) => {

    const {app__gotop} = styles;

  return (
    <button type="button" className={app__gotop} onClick={() => {comeToTop()}} >
      <ion-icon name="arrow-up"></ion-icon>
    </button>
  );
}

export default GoTop