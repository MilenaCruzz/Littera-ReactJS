import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import '../css/NewReading.css'
import ReadingForm from "../reading/ReadingForm";
import Message from '../layout/Message'

export default function NewReading(){

    const history = useHistory()
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')

    function createReading(reading) {
        setMessage('')
    
        if(!reading.name || reading.name === '') {
            setMessage('The book name is required.')
            setType('error')
            return false
        }

        if(!reading.price || reading.price <= 0 ) {
            setMessage('The price cannot be zero or negative.')
            setType('error')
            return false
        }

        if(!reading.category || reading.category === '') {
            setMessage('The book genrer is required.')
            setType('error')
            return false
        }

        if(!reading.description || reading.description === '') {
            setMessage('The book description is required.')
            setType('error')
            return false
        }

        fetch("http://localhost:5000/readings", {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reading)
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)
                //Redirect
                history.push('/readings', {message: 'Reading added successfully.'})
            })
        .catch(err => console.log(err))

    }

    return (
        <div className="newreading_container">
            <h1>Add a new book</h1>
            <p>Add your book and then describe the details.</p>
            {message && <Message type={type} msg={message}/>}
            <ReadingForm handleSubmit={createReading}/>
        </div>
    )
}