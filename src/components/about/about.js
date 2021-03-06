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
          <p> I am a recent full stack bootcamp graduate from the University of Pennsylvania.
            I am heavily engaged in learning HTML, CSS, and JavaScript.
            I am currently using my interest in web development to help me through a career transition.
            Computer coding has been an interest of mine for many years but only now have I chosen to pursue it.
            Please take a look at some of the projects I have worked on!</p>
        </div>
      </div>
    );
}

export default About;