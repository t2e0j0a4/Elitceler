import React from 'react'
import styles from "./Blogs.module.css";

const Blogs = () => {

  const {app__blogs, blogs__center, blogs__head} = styles;

  return (
    <div className={app__blogs}>

      <div className={blogs__center}>

        {/* Head */}
        <div className={blogs__head}>
          <h3>Our Blogs</h3>
          <p>You will find <span>INSIGHTS</span> and <span>INSPIRATION</span> here</p>
        </div>

      </div>

    </div>
  )
}

export default Blogs