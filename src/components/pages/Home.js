import React from "react";
import littera from '../../img/litteralogo.png'
import '../css/Home.css'
import LinkButton from "../layout/LinkButton";
export default function Home() {
    return(
        <section className="home_container">
            <h1>Welcome to <span>Littera</span></h1>
            <p>Start organizing your readings. It's easier than ever.</p>
            <img src={littera} alt=""/>
            <LinkButton to='/newreading' text="Create reading"/>
        </section>
    )
}