import React, {useContext, useEffect} from 'react'
import styles from "./Blogs.module.css";
import myContext from '../../Context/Context';
import { all } from 'axios';

const Blogs = () => {
  
  const {app__blogs, blogs__center, blogs__head} = styles;

  const context = useContext(myContext);
  const {fetchAllBlogs, allBlogs, totalBlogs} = context;

  useEffect(() => {
    fetchAllBlogs();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={app__blogs}>

      <div className={blogs__center}>

        {/* Head */}
        <div className={blogs__head}>
          <h3>Our Blogs</h3>
          <p>You will find <span>INSIGHTS</span> and <span>INSPIRATION</span> here</p>
        </div>

        {/* Blogs Source */}

      </div>

    </div>
  )
}

export default Blogs