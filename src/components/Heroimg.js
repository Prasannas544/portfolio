import "./HeroImgStyles.css"
import React from 'react'
import IntroImg from "../assets/1195976.jpg"

import { Link } from "react-router-dom"

const Heroimg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img"
                    src={IntroImg} alt="img" />
            </div>
            <div className="content">
                <p>HI, IM PRASANNA</p>
                <h1>Frontend Developer</h1>
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Heroimg