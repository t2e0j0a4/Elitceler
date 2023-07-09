import React, {useState} from 'react'
import axios from 'axios';
import myContext from "./Context";

const State = (props) => {

    const API = "https://fine-tuna-turtleneck-shirt.cyclic.app";

    // Contact Us API Endpoint

    const [reachUsInputs, setReachUsInputs] = useState({
        fullName : '',
        email : '',
        message : ''
    })

    const reachInputsChange = (e) => {
        setReachUsInputs({
            ...reachUsInputs, [e.target.name] : e.target.value
        });
    }

    const [reachMsgResponse, setReachUsResponse] = useState({
        success : null,
        message : ''
    });

    const [showMsg, setShowMsg] = useState(false);

    const reachUsSubmit = async (e) => {
        e.preventDefault();
        if (reachUsInputs.fullName && reachUsInputs.email) {

            const newMessage = {
                fullName : reachUsInputs.fullName,
                email : reachUsInputs.email,
                message : reachUsInputs.message || 'No Message'
            }

            const sendMessage = await axios.post(`${API}/v1/reachus/details`, newMessage, {
                headers : {
                    'Content-Type' : 'application/json'
                }
            });
            
            setReachUsResponse(sendMessage.data);
            setShowMsg(true);
            setReachUsInputs({fullName : '', email : '', message : ''});
        }
    }

    // Blogs API Endpoints

    const [allBlogs, setAllBlogs] = useState([]);
    const [totalBlogs, setTotalBlogs] = useState(0);
    const [allBlogsLoad, setAllBlogsLoad] = useState(false);

    // Function : For fetching all blogs from API.
    const fetchAllBlogs = async () => {
        setAllBlogsLoad(true);
        const apiResponse = await axios.get(`${API}/v1/blogs/getblogs`);
        const blogsData = apiResponse.data;
        const {blogs, total} = blogsData;
        setAllBlogs(blogs);
        setTotalBlogs(total);
        setAllBlogsLoad(false);
    }
    
    // Blog Adding Here

    const [blogDetails, setBlogDetails] = useState({
        blogTitle : "",
        blogDescription : "",
        blogImage : ""
    });

    const [blogSubmitMsg, setBlogSubmitMsg] = useState({
        message : '',
        success : null
    })

    const [blogShowMsg, setBlogShowMsg] = useState(false);

    const convertToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };

    const handleFile = async (e) => {
        const file = e.target.files[0];
        const convertBase64 = await convertToBase64(file); 
        setBlogDetails({
            ...blogDetails, blogImage : convertBase64
        });
    };

    const handleInputs = (e) => {
        setBlogDetails({
            ...blogDetails, [e.target.name] : e.target.value
        })
    }

    // Adding a new Blog
    const submitBlog = async (e) => {
        e.preventDefault();

        try {
            let {blogTitle, blogDescription, blogImage} = blogDetails;
            if (blogTitle && blogDescription) {
                const response = await axios.post(`${API}/v1/blogs/addblog`, {
                    blogTitle, blogDescription, blogImage
                }, {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                });

                const {success, message} = response.data;

                setBlogShowMsg(true);
                setBlogSubmitMsg({
                    ...blogSubmitMsg, success, message
                });
                setBlogDetails({
                    blogTitle : '',
                    blogDescription : "",
                    blogImage : ''
                });
            }

        } catch (error) {
            console.log(error.message);
        }
    }

    // Fetching a single blog

    const [blogPost, setBlogPost] = useState({});
    const [blogPostLoad, setBlogPostLoad] = useState(false);

    const fetchASingleBlog = async (blogId) => {
        setBlogPostLoad(true);
        let response = await axios.get(`${API}/v1/blogs/getblog/${blogId}`);
        const {blog} = response.data;
        setBlogPost(blog[0]);
        setBlogPostLoad(false);
    }

    return (
        <myContext.Provider value={{ reachUsInputs, reachInputsChange, reachUsSubmit, reachMsgResponse, setReachUsResponse, showMsg, setShowMsg, fetchAllBlogs, allBlogs, totalBlogs, handleFile, blogDetails, handleInputs, submitBlog, blogShowMsg, setBlogSubmitMsg, blogSubmitMsg, setBlogShowMsg, allBlogsLoad, fetchASingleBlog, blogPost, blogPostLoad }}>
            {props.children}
        </myContext.Provider>
    )
}

export default State