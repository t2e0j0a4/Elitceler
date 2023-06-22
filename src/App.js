import React, {useEffect, useState} from 'react'
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import GoTop from './Components/GoTop/GoTop';
import {Home, Team, Blogs, Blog, NotFound, CreateBlogs} from "./Pages";
import State from './Context/State';

const App = () => {

   let location = useLocation();
   let navigate = useNavigate();
  
  // Function to make Captialize Words.
  const makeWordCaptialize = (word) => {
    let wordBreakage = word.split('');
    wordBreakage[0] = wordBreakage[0].toLocaleUpperCase();
    return wordBreakage.join('');
  }

  useEffect(() => {
    let currentPageName = location.pathname.replace('/', '');
    document.title = currentPageName ? `ElitCeler | ${makeWordCaptialize(currentPageName)}` : 'ElitCeler | Building Tech Everywhere!';
    if (location.pathname.includes('/blog/')) {
      document.title = 'Blogs | ElitCeler Technologies';
    }
    window.scrollTo({top : 0, behavior : 'smooth'});
  }, [location]);

  const [seeGoTop, setSeeGoTop] = useState(false);

  useEffect(() => {

    const id = setInterval(() => {
      if (window.scrollY >= 200) {
        setSeeGoTop(true);
      }
      else {
        setSeeGoTop(false);
      }
    }, 0);

    return () => {clearInterval(id);}

  }, [seeGoTop]);

  const comeToTop = () => {
    location.pathname === '/' && navigate('/');
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <State>
      <div className="app">
        <Navbar />
        <div className="main__center">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path="*" element={<NotFound />} />
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path="/blog/:id" element={<Blog />} />
            <Route exact path="/new" element={<CreateBlogs />} />
          </Routes>
        </div>
        <Footer />
        {seeGoTop && <GoTop comeToTop={comeToTop} />}
      </div>
    </State>
  );
}

export default App