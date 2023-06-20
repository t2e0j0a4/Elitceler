import React, {useContext, useEffect, useState} from 'react'
import styles from "./Blog.module.css";
import { Link, useParams } from 'react-router-dom';
import myContext from '../../Context/Context';
import dummyBlogPic from "../../Assets/Blog.png";

const Blog = () => {

  const {id} = useParams();
  const context = useContext(myContext);
  const { } = context;
  const {main__blog, blog__center, blogs__loader, blog__data, blog__details, blog__img, blog__desc, go__back} = styles;

  const [loading, setLoading] = useState(false);

  const [blogPost, setBlogPost] = useState({
    "_id":"6491f2cc2a07edc3e59b3099",
    "blogTitle":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, fugiat.",
    "blogDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nihil eligendi debitis, sapiente, qui autem totam, facilis velit numquam voluptatem ipsum sint doloremque. Laudantium, aliquam nostrum odit debitis facilis optio, quaerat ea laborum libero ipsa nulla ullam ducimus quam sed porro vitae laboriosam architecto. Inventore obcaecati recusandae neque soluta aspernatur asperiores, eveniet vel nostrum quisquam sequi quod in accusamus voluptate!",
    "blogImage":"",
    "dateUpload":"2023-06-20T18:41:16.778Z",
    "__v":0
  });


  return (
    <div className={main__blog}>
      <div className={blog__center}>

        {
          loading ? (
            <div className={blogs__loader}>
              <p>Gathering blog info...</p>
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