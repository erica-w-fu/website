import React from "react";
import '../ProjectSection.css';

import img1 from '../project-media/Cross Country Communications/ccc-erica.jpeg'
import img2 from '../project-media/Cross Country Communications/ccc-mother.jpeg'

function CrossCountryCommunications() {
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

export default CrossCountryCommunications;