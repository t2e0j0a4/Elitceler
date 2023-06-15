import React, {useEffect} from 'react'
import {Routes, Route, useLocation} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import {Home, Team, Blogs, Blog, NotFound, Projects} from "./Pages";

const App = () => {

   let location = useLocation();
  
  // Function to make Captialize Words.
  const makeWordCaptialize = (word) => {
    let wordBreakage = word.split('');
    wordBreakage[0] = wordBreakage[0].toLocaleUpperCase();
    return wordBreakage.join('');
  }

  useEffect(() => {
    let currentPageName = location.pathname.replace('/', '');
    document.title = currentPageName ? `ElitCeler | ${makeWordCaptialize(currentPageName)}` : 'ElitCeler | Building Tech Everywhere!';
    window.scrollTo({top : 0, behavior : 'smooth'});
  }, [location]);

  return (
    <div className='app'>
      <Navbar/>
      <div className="main__center">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/team' element={<Team/>}/>
          <Route exact path='/blogs' element={<Blogs/>}/>
          <Route exact path='/blog/:id' element={<Blog/>}/>
          <Route exact path='*' element={<NotFound/>}/>
          <Route exact path='/projects' element={<Projects/>}/>
        </Routes>
      </div>
      {/* Footer */}
    </div>
  )
}

export default App