import React from 'react';
import Slider from "react-slick";

const Carousel = () => {

    const settings ={
        dots:false,
        infinite:true,
        autoplay:true,
        speed: 500
    }
    return (
        <div
        className = "carrousel_wrapper"
        style= {{
            overflow:'hidden',
            height:`${window.innerHeight}px`
        }}
        >
            
        </div>
    );
};

export default Carousel;