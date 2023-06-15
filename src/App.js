import React from 'react'
import {Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import {Home, Team, Blogs, Blog, NotFound, Projects} from "./Pages";

const App = () => {
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
      <Footer/>
    </div>
  )
}

export default App