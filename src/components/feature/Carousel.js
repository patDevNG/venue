import React from 'react';
import Slider from "react-slick";

import sliderImageOne from '../../resources/images/slide_one.jpg';
import sliderImageTwo from '../../resources/images/slide_two.jpg';
import sliderImageThree from '../../resources/images/slide_three.jpg'

const Carousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }
    return (
        <div
            className="carrousel_wrapper"
            style={{

                overflow: 'hidden',
                height: `${window.innerHeight}px`
            }}>
            <Slider {... settings}>
                <div>
                    <div
                    className ="carrousel_image"
                    style={{
                        background:`URL(${sliderImageOne})`,
                        height: `${window.innerHeight}px`
                    }}
                    >

                    </div>
                </div>
                <div>
                <div
                className ="carrousel_image"
                style={{
                    background:`URL(${sliderImageTwo})`,
                    height: `${window.innerHeight}px`
                }}
                >

                </div>
                </div>
                <div>
                <div
                    className ="carrousel_image"
                    style={{
                        background:`URL(${sliderImageThree})`,
                        height: `${window.innerHeight}px`
                    }}
                    >

                    </div>
                </div>
            </Slider >

        </div>
    );
};

export default Carousel;