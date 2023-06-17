import React from 'react'
import {whyUs,techPartners, technologies} from "../../Constant";
import styles from "./Home.module.css";
import Hero1 from "../../Assets/Hero1.svg";
import Hero2 from "../../Assets/Hero2.png";

const Home = () => {

  const {app__home, home__sections, section1__out, section2__out, section3__out, section4__out, section5__out, section6__out, section7__out, home__section1, section1__side1, section1__side2, home__section2, section2__side1, side1__head, side1__icon, section2__side2, home__section3, home__section4, section4__items, whyus__box, whyusbox__icon, home__section5, section5__data, tech__box, home__section6, section6__head, section6__data, techno__box, home__section7, section7__head, section7__data, contact__box, main__inputs, detail__input, message__input, contact__details } = styles;

  return (
    <section className={app__home}>

      {/* Section 1 - Hero Section */}

      <div className={section1__out}>
        <div className={`${home__section1} ${home__sections}`}>
          <div className={section1__side1}>
            <h1>"PRODUCTS THAT BRIDGE TO THE REALITY"</h1>
            <p>The future belongs to the generation who believes in dreams. We at ElitCeler Tech perform infinite times of continuous processes of improvements to fulfil those dreams.</p>
            <a href='#whyus'>Reach Us</a>
          </div>
          <div className={section1__side2}>
            <img src={Hero1} alt="Hero" />
          </div>
        </div>
      </div>

      {/* Section 1 - Hero Section */}

      {/* Section 2 - About Us */}

      <div className={section2__out}>
        <div className={`${home__section2} ${home__sections}`}>
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
      </div>

      {/* Section 2 - About Us */}

      {/* Section 3 - Why Us? */}

      <div className={section3__out} id='whyus'>
        <div className={`${home__section3} ${home__sections}`}>
          <h2>Why Us?</h2>
          <p>We are whatever you feel after you work with us and think after we deliver our finished product. From the beginning to the end, it’s all about quality, experience, and customer focussed.</p>
          <p>Our job ends with <span>your satisfaction.</span></p>
        </div>
      </div>

      {/* Section 3 - Why Us? */}

      {/* Section 4 - Why Us Depth */}

      <div className={section4__out}>
        <div className={`${home__section4} ${home__sections}`}>
          <div className={section4__items}>
            {
              whyUs.map((item) => {
                return (
                  <div key={item.id} id={`whyus__${item.id}`} className={whyus__box}>
                    <div className={whyusbox__icon}>
                      <ion-icon name={item.name}></ion-icon>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      {/* Section 4 - Why Us Depth */}

      {/* Section 5 - Our Tech Partners */}

      <div className={section5__out}>
        <div className={`${home__section5} ${home__sections}`}>
          <h2>Our Tech Partners</h2>
          <div className={section5__data}>
            {
              techPartners.map((item) => {
                return (
                  <div key={item.id} className={tech__box}>
                    <img src={item.partner} alt="Partner" />
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>

      {/* Section 5 - Our Tech Partners */}

      {/* Section 6 - Technologies */}

      <div className={section6__out}>
        <div className={`${home__section6} ${home__sections}`}>
          {/* Head */}
          <div className={section6__head}>
            <h2>Technologies</h2>
            <p>Talking on a technical basis, we are well versed with the latest technologies for optimized products. We support the creation of high-performance products with increased agility and industry-specific solutions.</p>
          </div>
          {/* Content */}
          <div className={section6__data}>
            {
              technologies.map((item) => {
                return (
                  <div key={item.id} className={techno__box}>
                    <ion-icon name={item.name}></ion-icon>
                    <p>{item.tech}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      {/* Section 6 - Technologies */}

      {/* Section 7 - Contact Us */}

      <div className={section7__out} id='contact'>
        <div className={`${home__section7} ${home__sections}`}>

          {/* Head */}
          <div className={section7__head}>
            <h2>Contact Us</h2>
            <p>To reach out us...</p>
          </div>

          {/* Contact Box */}

          <div className={section7__data}>

            <form className={contact__box}>
              <div className={main__inputs}>
                <div className={detail__input}>
                  <label htmlFor="name">Name*</label>
                  <input type="text" id='name' placeholder='Enter your Name' required />
                </div>
                <div className={detail__input}>
                  <label htmlFor="email">Email*</label>
                  <input type="text" id='email' placeholder='Enter your Email' required />
                </div>
              </div>
              <div className={message__input}>
                <textarea name="message" placeholder='Message...'></textarea>
              </div>
              <button type='button'>Send Message <ion-icon name="paper-plane-outline"></ion-icon></button>
            </form>

            <div className={contact__details}>
              <a href="mailto:saikrishna.alishala@askgroup.org.in"><ion-icon name="mail-outline"></ion-icon><span>saikrishna.alishala@askgroup.org.in</span></a>
              <a href="tel:7897892565"><ion-icon name="call-outline"></ion-icon><span>(+91) 7897892565</span></a>
              <p><ion-icon name="time-outline"></ion-icon><span>9:00 AM - 6:00 PM</span></p>
              <p><ion-icon name="pin-outline"></ion-icon><span>Nacharam, Hyderabad, Telangana, 500076</span></p>
            </div>

          </div>

        </div>
      </div>

      {/* Section 7 - Contact Us */}

    </section>
  );
}

export default Home