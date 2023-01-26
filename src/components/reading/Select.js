import React from "react";
import '../css/Select.css'

export default function Input({text, name, options, handleonChange, value}) {
    return (
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleonChange} value={value || ''}>
                <option>Select the book genrer</option>
                {options.map((option) => (
                <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}