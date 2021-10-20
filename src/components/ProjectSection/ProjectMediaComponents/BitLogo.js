import React from "react";
import '../ProjectSection.css';

import img1 from '../project-media/Bit Logo/stationary-mockup.png'
import img2 from '../project-media/Bit Logo/building-mockup.png'

function BitLogo() {
    return(
        <>
            <div className="project-media-container">
                <div className="project-media">
                    <img src={img1} className="project-img"></img>
                </div>
            </div>
            <div className="project-media-container">
                <div className="project-media">
                    <img src={img2} className="project-img"></img>
                </div>
            </div>
        </>
    )
}

export default BitLogo;