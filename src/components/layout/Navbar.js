import React from "react";
import { Link } from "react-router-dom";
import '../css/Navbar.css'
import logo from '../../img/litteraicon.png'


export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">
            <img src={logo} alt=""/>

            </Link>

            <ul className="list">
                <li className="item">
                <Link to="/">Home</Link>
                </li>

                <li className="item">
                <Link to="/about">About</Link>
                </li>

                <li className="item">
                <Link to="/readings">Books</Link>
                </li>
            </ul>
        </nav>
    )
}