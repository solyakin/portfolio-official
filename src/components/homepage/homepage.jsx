import React from 'react';
import '../homepage/homepage.css';
import  Hero from '../hero/hero';
import ImageHero from '../image-hero/image-hero';

const Homepage = (props) =>{
    console.log(props)
    return(
        <div className="homepage">
            <ImageHero/>
            <Hero props ={props}/>
        </div>
    )
}

export default Homepage;