import React, {useContext} from 'react'
import styles from "./CreateBlogs.module.css";
import myContext from '../../Context/Context';
import defaultBlogPic from "../../Assets/Blog.png";

const CreateBlogs = () => {

    const {app__create, create__center, create__blog, create__head, create__space, text__space, image__space, submit__blog, response__bmsg, response__gmsg } = styles;

    const context = useContext(myContext);
    const {handleFile, blogDetails, handleInputs, submitBlog, blogShowMsg, setBlogShowMsg, blogSubmitMsg, setBlogSubmitMsg} = context;

    return (
        <div className={app__create}>
            
            <div className={create__center}>

                {/* Adding a Blog */}
                <div className={create__blog}>
                    
                    {/* Heading */}
                    <div className={create__head}>
                        <h2>Publish a Blog!</h2>
                    </div>

                    {/* Space of creating blog */}
                    <form className={create__space} onSubmit={(e) => {
                        submitBlog(e);
                        setTimeout(() => {
                          setBlogShowMsg(false);
                          setBlogSubmitMsg({
                            success: null,
                            message: "",
                          });
                        }, 5000);}}>
                        <div className={text__space}>
                            <input required type="text" name="blogTitle" placeholder='Blog Title*' value={blogDetails.blogTitle} onChange={(e) => {handleInputs(e)}} />
                            <textarea required name="blogDescription" placeholder='Blog Description*' value={blogDetails.blogDescription} onChange={(e) => {handleInputs(e)}} />
                        </div>
                        <div className={image__space}>
                            <label htmlFor="bImage">
                                <img src={blogDetails.blogImage || defaultBlogPic} alt="Blog" />
                            </label>
                            <input type="file" name="blogImage" id='bImage' multiple={false} accept='.png, .svg, .jpeg, .jpg' onChange={(e) => {handleFile(e)}} />
                            <span>Click on Image to change</span>
                        </div>
                        {
                            blogShowMsg && <p className={`${blogSubmitMsg.success ? response__gmsg : response__bmsg}`}>{blogSubmitMsg.message}</p>
                        }
                        <div className={submit__blog}>
                            <button type='submit'>Submit</button>
                        </div>
                    </form>

                </div>

            </div>

        </div>
    )
}

export default CreateBlogs