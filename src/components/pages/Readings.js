import React, { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom'
import Message from "../layout/Message";
import Container from '../layout/Container'
import LinkButton from "../layout/LinkButton";
import ReadingCard from "./ReadingCard";
import '../css/Readings.css'


export default function Readings() {

    const [readings, setReadings] = useState([])
    const [readingMessage, setReadingMessage] = useState('')


    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message
    }

    useEffect(()=> {
        fetch("http://localhost:5000/readings", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then((data) => {
                console.log(data)
                setReadings(data)
            })
            .catch((err) => console.log(err))
    }, [])

    function removeReading(id) {
        fetch(`http://localhost:5000/readings/${id}`, {
            method:"DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then(() => {
                setReadings(readings.filter((reading) => reading.id !== id))
                setReadingMessage('Reading removed succesfully.')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="reading_container">
            <div className="title_container">
            <h1>My readings</h1>    
            <LinkButton to='/newreading' text="Create reading"/>
            </div>       
            {message && <Message type="success" msg={message}/>}
            {readingMessage && <readingMessage type="success" msg={readingMessage}/>}
            <Container customClass="start">
                {readings.length > 0 &&
                    readings.map((reading) =>  (
                        <ReadingCard name={reading.name}
                         id={reading.id}
                         price={reading.price}
                         category={reading.category ? reading.category.name : reading.category}
                         key={reading.id}
                         description={reading.desc}
                         handleRemove={removeReading}/>
                    ))}
                    {readings.length === 0 && (
                        <p>There's no readings here. </p>
                    )

                    }  
                  
            </Container>
        </div>
    )
}