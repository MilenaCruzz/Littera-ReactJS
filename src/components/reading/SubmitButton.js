import React from "react";
import '../css/SubmitButton.css'

export default function SubmitButton({buttonText}) {
    return (
        <div className="form_control">
            <button>{buttonText}</button>
        </div>
    )
}