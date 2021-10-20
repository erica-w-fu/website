import React from "react";
import '../ProjectSection.css';

// import video1 from 'public/project-media/24/24-v1-demo.mov'
// import video2 from 'public/project-media/24/24-v2-demo.mov'

function TwentyFour() {
    return(
        <div className="project-media-container">
            <video width="35%" controls >
                <source src="project-media/24/24-v1-demo.mov" type="video/mp4"/>
            </video>
            <div className="divider"></div>
            <video width="35%" controls >
                <source src="project-media/24/24-v2-demo.mov" type="video/mp4"/>
            </video>
        </div>
    )
}

export default TwentyFour;
