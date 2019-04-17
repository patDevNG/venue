import React from 'react';
import Carrousel from './Carousel'
import CountDown from './CountDown'

const Featured = () => {
    return (
        <div style={{
                position: "relative"
            }}>
            <Carrousel/>

            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>
               <CountDown/>
        </div>
    );
};

export default Featured;