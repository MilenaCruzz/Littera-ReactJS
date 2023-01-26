import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import  '../css/Reading.css'
import ReadingForm from "../reading/ReadingForm";
import Message from '../layout/Message'

export default function Reading() {

    const {id} = useParams()
    const [reading, setReading] = useState([])
    const [showReadingForm, setShowReadingForm] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState()

    useEffect(() => {
        fetch(`http://localhost:5000/readings/${id}`, {
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
            },    
        })
          .then((res) => res.json())
          .then((data) => {
            setReading(data)
          })
          .catch((err) => console.log(err))
    }, [id])



    function editReading(reading) {
        setMessage('')

        if(reading.price <= 0) {
            setMessage('The book price cannot be negative, try again.')
            setType('error')
            return false
        }

      
        fetch(`http://localhost:5000/readings/${reading.id}`,{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reading),
        })
        .then((res) => res.json())
        .then((data) => {
            setReading(data)
            setShowReadingForm(false)
            setMessage('Reading updated successfully.')
            setType('success')
        })
        .catch((err) => console.log(err))
    }
    

    function toggleReadingForm(){
        setShowReadingForm(!showReadingForm)
    }


    return (
       <div className="reading_details">
            {message && <Message type={type} msg={message}/> }
            <div className="details_container">
                <h1>Book: {reading?.name}</h1>
                <button className="btn" onClick={toggleReadingForm}>
                {!showReadingForm ? 'Edit reading' : 'Close'}
                   </button>
                   {!showReadingForm ? (
                    <div className="reading_info">
                        <p>
                        <span>Genrer: </span> {reading.category?.name}
                        </p>
                        <p>
                            <span>Total price:</span> ${reading.price}
                        </p>       
                        <p>
                            <span>Description:</span>{reading.description}
                        </p>            
                    </div>
                ) : (
                    <div className="reading_info">
                       <ReadingForm handleSubmit={editReading} buttonText="Finish edition" readingData={reading}/>
                    </div>
                )}
            </div>
    
       </div>
    )
}