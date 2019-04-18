import React from 'react';
import Zoom from 'react-reveal/Zoom'

import calender_icons from '../../resources/images/icons/calendar.png';
import location_icons from '../../resources/images/icons/location.png'
const VenueInfo = () => {
    return (
        <div className="bck_black">
            <div className="center-wrapper">
                <div className="vn_wrapper">
                <Zoom duration = {600}>
                <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_red"></div>
                                <div
                                    className="vn_icon"
                                    style={{
                                        background: `url(${calender_icons})`
                                    }}></div>
                                <div className="vn_title">
                                    Event & Time
                                </div>
                                <div className="vn_desc">
                                    9th July 2019
                                </div>
                            </div>
                        </div>
                    </div> 
                </Zoom>
                <Zoom duration={600} delay ={650}>
                <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_yellow"></div>
                                <div className="vn_icon" style ={{background:`url(${location_icons})`}}></div>
                                <div className="vn_title">
                                    Event Location
                                </div>
                                <div className="vn_desc">
                                    Emab Plaza Shop
                                </div>
                            </div>
                        </div>
                    </div>
                </Zoom>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default VenueInfo;