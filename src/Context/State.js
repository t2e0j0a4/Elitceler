import React, {useState} from 'react'
import axios from 'axios';
import myContext from "./Context";

const State = (props) => {

    const API = 'http://localhost:5000';

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

    // Function : For fetching all blogs from API.
    const fetchAllBlogs = async () => {
        const apiResponse = await axios.get(`${API}/v1/blogs/getblogs`);
        const blogsData = apiResponse.data;
        const {blogs, total} = blogsData;
        setAllBlogs(blogs);
        setTotalBlogs(total);
    }

    return (
        <myContext.Provider value={{ reachUsInputs, reachInputsChange, reachUsSubmit, reachMsgResponse, setReachUsResponse, showMsg, setShowMsg, fetchAllBlogs, allBlogs, totalBlogs }}>
            {props.children}
        </myContext.Provider>
    )
}

export default State