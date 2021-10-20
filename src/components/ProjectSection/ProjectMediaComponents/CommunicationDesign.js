import React from "react";
import '../ProjectSection.css';

import img1 from '../project-media/Communication Design Fundamentals/gestalt-1.png'
import img2 from '../project-media/Communication Design Fundamentals/gestalt-2.png'

function CommunicationDesign() {
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

export default CommunicationDesign;