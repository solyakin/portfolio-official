import React from 'react';
import '../hero/hero.css';
import Nav from '../nav/nav';
import { Link } from 'react-router-dom';

const Hero = () =>{
    return(
        <div className="hero">
            <div className="container">
                <Nav/>
                <div className="profile_section">
                    <h1 className="name">Solomon Akinlade</h1>
                    <p>I'm a front end developer based in Lagos, Nigeria. A UI/UX enthusiast who have always been in awe of the web. I enjoy crafting amazing digital experiences. I create user friendly, asthetically pleasing and functional web products, ranging from websites to web apps</p>
                    <Link to='/projects'>
                        <button className="project-btn">View Projects</button>
                    </Link>
                    
                </div>
            </div>
            
        </div>
    )
}
export default Hero;