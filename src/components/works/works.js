
import React from 'react';
import Project from '../project/project';

const projects = [
    {
        title: "Electric Wipeout's Music Shop",
        deployedAt: "https://mortal-instruments-music-shop.herokuapp.com/",
        repo: "https://github.com/smeske10/Electric-Wipeouts-Mortal-Instruments",
        image:"assets/images/music-shop.jpeg",
    },
    {
        title: "Weather Forecast",
        deployedAt: "https://adolfo-g.github.io/Weather-Forecast/",
        repo: "https://github.com/Adolfo-G/Weather-Forecast",
        image:"assets/images/weather-preview.jpeg",
    },
    {
        title: "Countdown Games!",
        deployedAt: "https://adolfo-g.github.io/Countdown-Games/",
        repo: "https://github.com/Adolfo-G/Countdown-Games",
        image:"assets/images/TriviaHomePage.png",
    },
    {
        title: "PWA Text Editor",
        deployedAt: "https://pwa-text-editor2468.herokuapp.com/",
        repo: "https://github.com/Adolfo-G/PWA-Text-Editor",
        image:"assets/images/pwa-textEditor.jpeg",
    },
    {
        title: "My Blog",
        deployedAt: "https://my-blog-1029.herokuapp.com/",
        repo: "https://github.com/Adolfo-G/my-blog",
        image:"assets/images/blog.jpeg",
    },
    {
        title: "Note Taker",
        deployedAt: "https://note-taker-1029.herokuapp.com/",
        repo: "https://github.com/Adolfo-G/Note-Taker",
        image:"assets/images/noteTaker.png",
    },
]

function Works() {
    return (
        <div>
            <div className="grid-container">
            <h4 id="works">Works</h4>
                <div className="grid-x grid-margin-x small-up-1 medium-up-2">
                    {projects.map(project=>
                        <Project project={project}/>
                        )}
                 
                </div>
            </div>
        </div>
    );
}

export default Works;

