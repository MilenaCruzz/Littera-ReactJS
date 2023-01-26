import React from "react";
import '../css/Input.css'

export default function Input({type, text, name, placeholder, handleonChange, value}) {
    return (
        <div className="form_control">
            <label htmlFor={name}>{text}</label>
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleonChange} value={value} />
        </div>
    )
}