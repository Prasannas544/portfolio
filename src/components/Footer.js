import "./FooterStyles.css"
import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>152 S.B. Colony</p>
                            <p>Mumbai, India</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            8375808937
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            prasannas544@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>This is me Prasanna Swain. CEO & Founder of .... I enjoy discussing new projects and design challenges</p>
                    <div className="social">
                        <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer