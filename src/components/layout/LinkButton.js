import React from "react";
import {Link } from 'react-router-dom'
import '../css/LinkButton.css'

export default function LinkButton({to, text}){
    return(
        <Link className="button" to={to}>
            {text}
        </Link>
    )
}