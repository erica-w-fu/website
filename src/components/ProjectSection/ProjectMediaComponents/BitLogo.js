import React from "react";
import '../ProjectSection.css';

// import img1 from 'public/project-media/Bit Logo/stationary-mockup.png'
// import img2 from 'public/project-media/Bit Logo/building-mockup.png'
// import pdf from 'public/project-media/Bit Logo/BitGroupBrandDesign.pdf'

function BitLogo() {
    return(
        <>
            <div className="divider"></div>
            <p>To see my other designs and process, click <a className="link-color" href="project-media/Bit Logo/BitGroupBrandDesign.pdf" target="_blank">here</a>.</p>
            <div className="project-media-container">
                <div className="project-media">
                    <img src="project-media/Bit Logo/stationary-mockup.png" className="project-img"></img>
                </div>
            </div>
            <div className="project-media-container">
                <div className="project-media">
                    <img src="project-media/Bit Logo/building-mockup.png" className="project-img"></img>
                </div>
            </div>
        </>
    )
}

export default BitLogo;