import React, {useEffect, useState} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from "./Navbar.module.css";
import Logo from "../../Assets/Logo.svg";

const Navbar = () => {

  const { app__navbar, navbar__center, navbar__logo, navbar__list, list__item, menu__smallscreen, icon__color, active, selected } = styles;

  const [menuToggle, setMenuToggle] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const id = setInterval(() => {
      if (window.scrollY >= 200) {
        setMenuToggle(false);
      }
    }, 0);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <nav className={app__navbar}>

      <div className={navbar__center}>

        {/* Logo */}
        <div className={navbar__logo}>
          <img src={Logo} alt="Elitceler"/>
        </div>

        {/* Navigations */}
        <ul className={`${navbar__list} ${menuToggle ? active : ''}`}>
          <li className={list__item} onClick={() => {setMenuToggle(false)}} >
            <Link className={`${(location.pathname === '/' && location.hash !== '#whyus' && location.hash !== '#contact') && selected}`} to="/">Home</Link>
          </li>
          <li className={list__item} onClick={() => {setMenuToggle(false)}} >
            <a onClick={() => {navigate('/');}} className={`${location.hash === '#whyus' && selected}`} href="#whyus">Why Us?</a>
          </li>
          <li className={list__item} onClick={() => {setMenuToggle(false)}} >
            <Link className={`${location.pathname === '/team' && selected}`} to="/team">Team</Link>
          </li>
          <li className={list__item} onClick={() => {setMenuToggle(false)}} >
            <Link className={`${location.pathname === '/blogs' && selected}`} to="/blogs">Blogs</Link>
          </li>
          <li className={list__item} onClick={() => {setMenuToggle(false)}} >
            <Link className={`${location.pathname === '/projects' && selected}`} to="/projects">Projects</Link>
          </li>
          <li className={list__item} onClick={() => {setMenuToggle(false)}} >
            <a onClick={() => {navigate('/');}} className={`${location.hash === '#contact' && selected}`} href="#contact">Contact Us</a>
          </li>
      </ul>

        {/* Small Screen Hamburger */}
        <div className={menu__smallscreen}>
          <button type='button' className={`${menuToggle ? icon__color : ''}`} onClick={() => {setMenuToggle(!menuToggle)}}>
            <ion-icon name="menu" ></ion-icon>
          </button>
        </div>

      </div>

    </nav>
  )
}

export default Navbar