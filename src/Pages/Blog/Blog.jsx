import React, {useContext, useEffect} from 'react'
import styles from "./Blog.module.css";
import { Link, useParams } from 'react-router-dom';
import myContext from '../../Context/Context';
import dummyBlogPic from "../../Assets/Blog.png";

const Blog = () => {

  const {id} = useParams();
  const context = useContext(myContext);
  const { fetchASingleBlog, blogPost, blogPostLoad } = context;

  const {main__blog, blog__center, blogs__loader, blog__data, blog__details, blog__img, blog__desc, go__back, building__blocks} = styles;
  
  useEffect(() => {
    fetchASingleBlog(id);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={main__blog}>
      <div className={blog__center}>

        {
          blogPostLoad ? (
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
            <div className={blog__data} id={`blog__${blogPost._id}`}>
              <div className={blog__details}>
                <h1>{blogPost.blogTitle}</h1>
                <p>{new Date(blogPost.dateUpload).toLocaleString()}</p>
              </div>
              <div className={blog__img}>
                <img src={blogPost.blogImage || dummyBlogPic} alt={blogPost.blogTitle} />
              </div>
              <div className={blog__desc}>
                <p>{blogPost.blogDescription}</p>
              </div>
              <div className={go__back}>
                <Link to={'/blogs'}><ion-icon name="chevron-back"></ion-icon> Back</Link>
              </div>
            </div>
          )
        }

      </div>
    </div>
  )
}

export default Blog