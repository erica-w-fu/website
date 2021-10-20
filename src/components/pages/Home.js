import React from 'react';
import '../../App.css';
import './Pages.css';
import FeaturedProjectSection from'../FeaturedProjectSection/FeaturedProjectSection.js'

function Home() {
  return (
      <>
        <h4>
          <b>Nice to meet you! </b>
            I am an Information Systems major at Carnegie Mellon University, minoring in Human Computer Interaction, Design, and Computer Science. I hope to use my skills to help others and bring them a unique experience.  
        </h4>
        <FeaturedProjectSection
          title="30 Day Adulting"
          summary="Developing an adulting challenge iOS application to use social influence principles to effectively teach and encourage cybersecurity habits."
          component="thirty_day_adulting"
          id="0"
        />
        <FeaturedProjectSection
          title="Cross Country Connections"
          summary="Using physical computing to create a playful, rermotely connective, interactive canvas."
          component="ccc"
          id="1"
        />
        <FeaturedProjectSection
          title="Sentence Mosaics"
          summary="Developed a language therapy app with React to assist individuals with the formation of novel, complete, and meaningul sentences with a digital language coach."
          component="sentence_mosaics"
          id="2"
        />
      </>
  );
}

export default Home;