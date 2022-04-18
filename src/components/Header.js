import React from "react"
import logo from '../images/TrollFace.png'

export default function Header(){
    return (
        <nav>
            <img className = "header_logo" src={logo}/>

            <h2 className = "header_title"> Meme Generator </h2>

            <h3 className = "header_desc"> React Course - Project 3</h3>
        </nav>
    )
}