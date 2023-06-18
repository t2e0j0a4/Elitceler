import React, {useState} from 'react'
import axios from 'axios';
import myContext from "./Context";

const State = (props) => {

    const API = 'http://localhost:5000';

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

            setReachUsInputs({fullName : '', email : '', message : ''});
            setReachUsResponse(sendMessage.data);
        }
    }

    return (
        <myContext.Provider value={{ reachUsInputs, reachInputsChange, reachUsSubmit, reachMsgResponse, setReachUsResponse }}>
            {props.children}
        </myContext.Provider>
    )
}

export default State