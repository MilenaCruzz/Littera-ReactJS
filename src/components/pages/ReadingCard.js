import React from "react";
import { Link } from "react-router-dom";
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import '../css/ReadingCard.css'

export default function ReadingCard({id, price, name, category, handleRemove}) {

 

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
       <div className="reading_card">
        <h4>{name}</h4>
        <p>
         <span>Price:</span> ${price}
        </p>
        <p className="category_text">
            <span ></span>{category}
        </p>
    
        <div className="reading_card_actions">
            <Link className="button" to={`/reading/${id}`}>
                <BsPencil/> Edit
            </Link>

            <button className="button" onClick={remove}>
            <BsFillTrashFill/> Remove
            </button>
            
        </div>
       </div>
    )
}