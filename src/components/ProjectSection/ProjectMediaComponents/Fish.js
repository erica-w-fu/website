import React from "react";
import '../ProjectSection.css';
import ScriptTag from 'react-script-tag';

import app from '../project-media/Fish/fish.pde'

function Fish() {
    return(
        <>
            <div className="project-media-container">
                <ScriptTag type="text/java" src={ app } />
                {/* <canvas id="mysketch"/> */}
            </div>
            <a href="#">
                <canvas id="fish" data-processing-sources={app} width="50" height="50">
                    <p>Your browser does not support the canvas tag.</p>
                </canvas>
            </a>
        </>
    )
}

export default Fish;