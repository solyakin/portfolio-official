import React, { useState } from 'react';
import '../menu/menu.css';
import { Link } from 'react-router-dom';

const Menu = ({open, closeMenu})=>{
    
    return(
        <div className="menu" style={{display : open}}>
            <div className="menu_list_wrapper">
                <h2 className= "menu-heading" onClick={closeMenu}>Close</h2>
                <ul className="hamburger_menu_list">
                    <Link to='/'>
                        <li>HOME</li>
                    </Link>
                    <Link to='/projects'>
                        <li>PORTFOLIO</li>
                    </Link>
                    <li>ABOUT</li>
                    <Link to='/contact'>
                        <li>CONTACT</li>
                    </Link>
                    <a href='https://docs.google.com/document/d/1rZYcWnA9BbHp73VHBuB9h1NhlMxoZl91/edit#'>
                        <li>
                            RESUME
                        </li>
                    </a>
                    
                </ul>
            </div>
        </div>
    )
};

export default Menu;