import React, {useContext, useEffect} from 'react'
import styles from "./Blogs.module.css";
import myContext from '../../Context/Context';
import defaultBlogPic from "../../Assets/Blog.png";
import { Link } from 'react-router-dom';

const Blogs = () => {
  
  const {app__blogs, blogs__center, blogs__head, blogs__content, blogs__space, each__blog, blog__details, blogs__loader, building__blocks} = styles;

  const context = useContext(myContext);
  const {fetchAllBlogs, allBlogs, totalBlogs, allBlogsLoad} = context;

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
          <p>
            You will find <span>INSIGHTS</span> and <span>INSPIRATION</span>{" "}
            here
          </p>
        </div>

        {/* Blogs Source */}
        {allBlogsLoad ? (
          <div className={blogs__loader}>
            <div className={building__blocks}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <div className={blogs__content}>
            <h2>Lastest Blog Posts</h2>
            <p>Total : {totalBlogs}</p>
            {/* Blogs */}
            <div className={blogs__space}>
              {allBlogs.map((blog) => {
                const { _id, blogTitle, blogDescription, blogImage } = blog;
                return (
                  <Link key={_id} to={`/blog/${_id}`}>
                    <div className={each__blog}>
                      <img src={blogImage || defaultBlogPic} alt={blogTitle} />
                      <div className={blog__details}>
                        <h4>
                          {blogTitle.length <= 32
                            ? blogTitle
                            : blogTitle.slice(0, 32) + " ..."}
                        </h4>
                        <p>
                          {blogDescription.length <= 56
                            ? blogDescription
                            : blogDescription.slice(0, 56) + " ... Read More"}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blogs