import React from 'react'
import styles from "./Home.module.css";
import Hero1 from "../../Assets/Hero1.svg";
import Hero2 from "../../Assets/Hero2.png";

const Home = () => {

  const {app__home, home__section1, section1__side1, section1__side2, home__section2, section2__side1, side1__head, side1__icon, section2__side2, home__section3} = styles;

  return (
    <section className={app__home}>

      {/* Section 1 - Hero Section */}
      <div className={home__section1}>
        <div className={section1__side1}>
          <h1>"PRODUCTS THAT BRIDGE TO THE REALITY"</h1>
          <p>The future belongs to the generation who believes in dreams. We at ElitCeler Tech perform infinite times of continuous processes of improvements to fulfil those dreams.</p>
          <button type='button'>Reach Us</button>
        </div>
        <div className={section1__side2}>
          <img src={Hero1} alt="Hero" />
        </div>
      </div>
      {/* Section 1 - Hero Section */}

      {/* Section 2 - About Us */}
      <div className={home__section2}>
        <div className={section2__side1}>
          <div className={side1__icon}>
            <ion-icon name="cube"></ion-icon>
          </div>
          <div className={side1__head}>
            <h2>About Us</h2>
            <p>We Build Tech for the future.</p>
          </div>
          <p>ElitCeler Technologies is a Product Based Company that helps companies, various tech startups and ventures by providing Software as a service (or SaaS - delivering applications over the Internet). We are a Web Application Development Company based in India covering all services from Agriculture to the Tourism sectors. Our core objective is to develop top-notch and magnificent products for the Health Care Sector.</p>
        </div>
        <div className={section2__side2}>
          <img src={Hero2} alt="About" />
        </div>
      </div>
      {/* Section 2 - About Us */}

      {/* Section 3 - Why Us? */}

      <div id='whyus' className={home__section3}>
        <h2>Why Us?</h2>
        <p>We are whatever you feel after you work with us and think after we deliver our finished product. From the beginning to the end, it’s all about quality, experience, and customer focussed.</p>
        <p>Our job ends with <span>your satisfaction.</span></p>
      </div>

      {/* Section 3 - Why Us? */}

    </section>
  );
}

export default Home