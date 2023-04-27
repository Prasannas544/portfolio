import "./WorkCardStyles.css"
import React from 'react'
import { Link } from "react-router-dom"

const WorkCard = (props) => {
    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="imagica" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <Link to={props.view} className="btn" target="_blank">View</Link>
                    <Link to={props.source} className="btn" target="_blank">Source</Link>
                </div>
            </div>
        </div>
    )
}

export default WorkCard