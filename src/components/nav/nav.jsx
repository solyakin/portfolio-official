import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div className="nav">
            <ul className="menu_list">
                <Link to='/'>
                    <li>HOME</li>
                </Link>
                <li>ABOUT</li>
                <Link to='/projects'>
                    <li>PORTFOLIO</li>
                </Link>
    
                <Link to='/contact'>
                    <li>CONTACT</li>
                </Link>
                
            </ul>
        </div>
    )
}

export default Nav;