import React from 'react'
import styles from "./Footer.module.css";
import logo from "../../Assets/Logo.svg";

const Footer = () => {

  const { app__footer, footer__center, footer__side1, side1__links, footer__rside, copyright__base } = styles;

  return (
    <footer className={app__footer}>
      <div className={footer__center}>

        <div className={footer__side1}>
          <img src={logo} alt="Elitceler" />
          <p>
            We believe in achieving our customers' dreams and showing them that
            their dreams have become a reality. If you have one such, then we
            are the right place for you.
          </p>
          <div className={side1__links}>
            <a href="/" target="_blank" rel="noopener" title="Twitter">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="/" target="_blank" rel="noopener" title="Instagram">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="/" target="_blank" rel="noopener" title="LinkedIn">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
        </div>

        <ul className={footer__rside}>
          <li>Our Divisions</li>

          <li>Health Care</li>
          <li>Education</li>
          <li>Finance</li>
        </ul>

        <ul className={footer__rside}>
          <li>Company</li>

          <li>About Us</li>
          <li>Partners</li>
          <li>Products</li>
        </ul>

        <ul className={footer__rside}>
          <li>Support</li>

          <li>Privacy Policy</li>
          <li>FAQ's</li>
        </ul>
      </div>

      <div className={copyright__base}>
        <p>&copy; ElitCeler. All Rights Reserved</p>
      </div>

    </footer>
  );
}

export default Footer