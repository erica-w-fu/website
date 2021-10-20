import React from 'react';
import { Link }from 'react-scroll';
import './Pages.css';
import Section from '../ProjectSection/ProjectSections.js';

function Projects() {

  const navHeight = -124;

  return( 
    <>
      <div className="aligned-sec">
        <div className="left-sec">
          <div className="left-sec-section">
            <Link to="development" spy={true} smooth={true} offset={navHeight} duration={500}>
              <p className="category">Development</p>
              <p>Swift • XCode</p>
              <p>React</p>
              <p>JS • CSS • HTML</p>
              <p>C# • Unity</p>
              <p>Processing</p>
            </Link>
          </div>

          <div className="left-sec-section">
            <Link to="design" spy={true} smooth={true} offset={navHeight} duration={500}>
              <p className="category">Design</p>
              <p>Adobe Illustrator</p>
              <p>Figma</p>
              <p>Adobe Photoshop</p>
            </Link>
          </div>

          <div className="left-sec-section">
            <Link to="fun" spy={true} smooth={true} offset={navHeight} duration={500}>
              <p className="category">Fun</p>
              <p>Physical Computing</p>
              <p>Textiles</p>
            </Link>
          </div>

        </div>
        <div className="right-sec">
          <div className="project-section">
            <div id="development">
              <Development />
            </div>
            <div id="design">
              <Design />
            </div>
            <div id="fun">
              <Fun />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects;

export function Development() {

  var strRead = `Component	Title	Category	Dates	Summary	Link
  thirty_day_adulting	30-Day Adulting	SwiftXCode	May 2021 - present	The 30-Day Adulting Challenge app is an iOS application developed at the Connected Experience HCI Lab at CMU. Using social influence principles, this app aims to effectively teach and encourage cybersecurity habits to young adults. As the head developer on the team, I collaborate with designers and other researchers to develop an application that will be first used to test our research questions and eventually be deployed to the app store for public use. Additionally, I help with talk alouds and intermediate user studies to gain insights and early feedback.	
  twentyfour	24	SwiftXCode	June 2019 - January 2021	24 was a personal project I developed to learn XCode basics. I was inspired by my brother's love for the card game, 24, and hoped to make something an app so he could play even without a deck of cards. I first created the app in 2019, but then created a second iteration with a simpler, more effective design in 2021. In the future, I would like to add multiplayer capabilities to incorporate the competitiveness of the card game.	
  sentence_mosaics	Sentence Mosaics	React JavascriptCSSHTML	August 2020 - May 2021	Sentence mosaics is a language therapy app that assists individuals with the formation of novel, complete, and meaningful sentences with a digital language coach. As a member of Design For America, a club at Carnegie Mellon that works in interdisciplinary teams and uses the human-centered design process to create social good projects, I worked on this project as a developer, testing and debugging issues before the final deployment of the app.	https://sentencemosaics.com/
  dfa_website	DFA Website	React JavascriptCSSHTML	May 2021 - August 2021	The Design For America website displays all the current projects, past projects, and generaal information of Carnegie Mellon's Design for America club. As the president, I assisted the Technology Chair in developing the website in React.	https://www.dfaxcmu.org/
  duquesne_incline	Duquesne Incline Website	JavascriptCSSHTML	March 2021 - April 2021	Developed for my Information Systems Milleux course, I designed and developed a website for the Duquesne Incline, a popular tourist location at Pittsburgh. Using bright colors and incorporating an incline into the navigation, I created a playful website that effectively communicated all the information about the incline to visitors, students, and teachers.	
  ccc_website	Cross Country Communications Digital Model	C#Unity	May 2021 - present	For the Cross Country Communications project, I created a digital model of the lights on our installation with my team member Jennifer Zhang. Using MQTT servers, this model communicates with the Raspberry Pis on the two physical installation and updates as buttons are pressed.	
  multitask	Multitask	C#Unity	December 2020 - January 2021	Multitask was a project I developed with my friend, John Wang, as a personal 2-week game design sprint. Inspired by an exhibit from the Arizona Science Center, we incorporated many different screens and interaction methods that the user has to pay attention to, we created a chaotic but fun experience.	https://play.unity.com/mg/other/webgl-builds-12595
  fish	Fish	Processing	September 2021	Developed for my Designing Human Centered Software course, I created an interactive fish that follows the cursor, as well as eats any food that the user drops by clicking on the screen.	`;
  
  return (
    <>
      {ProjectDisplay(strRead)}
    </>
  );
}

export function Design() {

  var strRead = `Component	Title	Category	Dates	Summary	Link
bit_logo	Bit Logo	AdobeIllustrator	May 2021	Created for Berkeley IT group (a high tech, investment company hoping to eventually expand to Japan), this logo simply and playfully utilizes negative space to emphasize their core values and create a memorable and easily distributable icon. 	
practicing_form	Practicing Form and Composition	AdobeIllustrator	September 2021	Created for my Communication Design Fundamentals course, I used squares while considering negative space to convey different emotions.	
art	Art	AdobePhotoshop	August 2018 - May 2020	Using traditional mediums and Photoshop, I used food to explore how food can be used to represent how I perceive myself.	`;
  
  return (
    <>
      {ProjectDisplay(strRead)}
    </>
  );
}

export function Fun() {
  
  var strRead = `Component	Title	Category	Dates	Summary	Link
ccc 	Cross Country Connections	PhysicalComputing	May 2021 - present	Funded by a SURG (Small Undergraduate Research Grant) from Carnegie Mellon, this project explores unique remote communication methods through tactile interactions with a large canvas. With two large-scale light installations placed in the Bay Area and Pittsburgh, the research project physical interaction to between users in the two locations to explore how remote collaboration and connection can be more engaging and playful. Within this project I am the lead Physical Computing programmer and builder of the Bay Area installation.	https://crosscountryconnections.github.io/index.html
acrylic_pour_painting_platform	Acrylic Pour Painting Platform	PhysicalComputing	April 2021 - May 2021	Created for my Physical Computing course, I built a device with two other students for our client. She has a passion for acrylic pour painting, but her cerebral palsy necessitates assistance to create the painting, preventing her from being able to have full creative control over her pieces.	https://courses.ideate.cmu.edu/60-223/s2021/work/acrylic-pour-painting-platform-by-pines-final-documentation/
textile_work	Textile work	Textiles	May 2021 - present	Textiles has been a new medium for me to create useful and playful products with.	`;
  
  return (
    <>
      {ProjectDisplay(strRead)}
    </>
  );
}

export function ProjectDisplay(strRead) {
  
  var projectArr = csvArray(strRead, "\t");

  return (
    <>
      {projectArr.length>0?
        <>
          {
            projectArr.map((item, i) => {
              return <Section
                key={ i }
                href={ "/" + i }
                component={ item.Component }
                title={ item.Title }
                category={ item.Category }
                dates={ item.Dates }
                body={ item.Summary }
                link={ item.Link }
              />
            })
          }
        </> : <h1>{projectArr.length}</h1>}
    </>
  );
}

async function fetchCsv() {
  const response = await fetch('data/mycsv.csv');
  const reader = response.body.getReader();
  const result = await reader.read();
  const decoder = new TextDecoder('utf-8');
  const csv = await decoder.decode(result.value);
  console.log('csv', csv);
  return csv;
}

function csvArray(str, delim) {
  const headers = str.slice(0,str.indexOf('\n')).split(delim);
  const rows = str.slice(str.indexOf('\n')+1).split('\n');

  const newArray = rows.map( row => {
    const values = row.split(delim);
    const eachObject = headers.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
    }, {})
    return eachObject;
  })

  return newArray;
}