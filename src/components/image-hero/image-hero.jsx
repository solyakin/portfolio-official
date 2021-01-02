import {React, useState} from 'react';
import '../image-hero/image-hero.css';
import Menu from '../menu/menu';
import heroImage from '../assets/image1.jpg';

const ImageHero = ()=>{
    const [open, setOpen] = useState('none');

    const openMenu = () => {
        setOpen('block')
    }

    const closeMenu = () => {
        setOpen('none')
    }

    return(
        <div className="image-hero">
            <div className="top-menu">
                <p className="logo">Solomon Akinlade</p>
                <button className="menu-icon" onClick={openMenu}>Menu</button>
                <Menu open={open} closeMenu={closeMenu}/>
            </div>
            <img src={heroImage} alt="hero" className="image"/>
            <div className="skills">
                <li>HTML</li>
                <li>CSS</li>
                <li>JAVASCRIPT</li>
                <li>REACTJS</li>
                <li>GRAPHQL</li>
                <li>FIREBASE</li>
            </div>
        </div>
    )
}
export default ImageHero;