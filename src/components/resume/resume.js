import React from 'react';


function Resume() {
    return (
        <div>
            <div className='resume-bullets'>
            <p>Download My <a href="assets/docs/resume.pdf" download="Resume">Resume</a></p>
                <h4>Front-End Proficiencies</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Foundation</li>
                </ul>
                <h4>Back-End Proficiencies</h4>
                <ul>
                    <li>API's</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;