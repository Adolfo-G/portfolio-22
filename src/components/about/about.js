import React from 'react';

function About() {
    return (
        <div className="media-object">
        <div className="media-object-section">
          <div className="thumbnail">
            <img className="profilePic" src="assets/images/profilePic.jpg"/>
          </div>
        </div>
        <div className="media-object-section">
          <h4 id="about-me">About Me</h4>
          <p className='aboutMe-txt'> Hello! I am a full stack bootcamp graduate from the University of Pennsylvania.
            Since graduating I have had the opportunity to work on my skill's via projects using a MERN stack as well as attending a hack-a-thon.
            I am currently using my interest in web development to help me through a career transition.
            Computer programming has been an interest of mine for many years and I am actively looking for a developer position in this exciting industry.
            Please take a look at some of the projects I have worked on!</p>
        </div>
      </div>
    );
}

export default About;