import React from 'react';
import '../contacts/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
import contactImage from '../assets/pix.jpg';
import TwitterLogo from  '../assets/twitter.svg';
import githubLogo from '../assets/github-logo.svg';

const Contact = (props) => {
    return(
        <div className="contact">
            <div className="contact-container">
                <div className="left-card">
                    <h1>Get in Touch</h1>
                    <button onClick = { () => props.history.push("/projects")}>Back</button>
                    <img src={contactImage} alt="" className="contact-image"/>
                </div>

                <div className="right-card">
                    <div className="right-card-detail">
                        <p>I'm currently available for work/collaborations. Feel free to contact me anytime and I will get back to you as soon as possible</p>
                    </div>
                    <div className="contact-wrapper">
                    <h2>Info</h2>
                    <div className="email">
                    <FontAwesomeIcon icon={faEnvelope} />
                        <span>solomon.akinlade19@gmail.com</span>
                    </div>
                    <div className="phone-no">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                        <span>+2348169114001</span>
                    </div>
                    <div className="twitter">
                        <img src={TwitterLogo} alt=""/>
                        <span>Twitter</span>
                    </div>
                    <div className="github">
                        <img src={githubLogo} alt=""/>
                        <span>Github</span>
                    </div>
                    <div className="location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span>Lagos, Nigeria</span>
                    </div>
                </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact;