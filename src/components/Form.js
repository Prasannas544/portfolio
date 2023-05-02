import { useNavigate } from "react-router-dom"
import "./FormStyles.css"
import React, { useState } from 'react'

const Form = () => {
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [subject, setsubject] = useState()
    const [msg, setmsg] = useState()

    const navigate = useNavigate();


    let endpointUrl = 'http://ec2-3-110-184-231.ap-south-1.compute.amazonaws.com:8080/submit-form-data'
    // let endpointUrl = 'http://localhost:8080/submit-form-data'

    const handleSubmit = async (e) => {
        e.preventDefault()
        let payload =

        {
            name: name,
            email: email,
            topic: subject,
            message: msg
        }

        apiCall(payload);

    }

    const apiCall = async (postData) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        };

        fetch(endpointUrl, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.status == 200) {
                    alert(data.msg)
                    navigate('/')
                } else {
                    alert("retry after some time")
                }
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="form">
            <form>
                <label>Your Name</label>
                <input type="text" onChange={(e) => setname(e.target.value)}></input>
                <label>Email</label>
                <input type="email" onChange={(e) => setemail(e.target.value)}></input>
                <label>Subject</label>
                <input type="text" onChange={(e) => setsubject(e.target.value)}></input>
                <label>Message</label>
                <textarea rows="6" placeholder="Type your message here" onChange={(e) => setmsg(e.target.value)} />
                {email && name && subject ? <button className="btn" onClick={(e) => handleSubmit(e)} >Submit</button> :
                    <button type="button" className="btn" onClick={(e) => { alert("fill the details plz") }}  >Submit</button>}
            </form>
        </div>
    )
}

export default Form