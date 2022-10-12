
import React from 'react';
import Project from '../project/project';

const projects = [
    {
        title: "Electric Wipeout's Music Shop",
        deployedAt: "https://mortal-instruments-music-shop.herokuapp.com/",
        repo: "https://github.com/smeske10/Electric-Wipeouts-Mortal-Instruments",
        image:"assets/images/music-shop.jpeg",
        description:"This full stack web application allows users to search music products, add them to cart, and make purchases. This site uses a MERN stack along with Handlebars",
    },
    {
        title: "Weather Forecast",
        deployedAt: "https://adolfo-g.github.io/Weather-Forecast/",
        repo: "https://github.com/Adolfo-G/Weather-Forecast",
        image:"assets/images/weather-preview.jpeg",
        description:"Using a weather based API users can check weather conditions for their city of interest. A five day forecast is also provided with the ability to store recent search history.",

    },
    {
        title: "Countdown Games!",
        deployedAt: "https://adolfo-g.github.io/Countdown-Games/",
        repo: "https://github.com/Adolfo-G/Countdown-Games",
        image:"assets/images/TriviaHomePage.png",
        description:"This application allows users to play a trivia themed game with a race against the clock. Users can see their high score and retry to beat their personal best score. This site uses Foundation, OpenTriviaDB API",
    },
    {
        title: "PWA Text Editor",
        deployedAt: "https://pwa-text-editor2468.herokuapp.com/",
        repo: "https://github.com/Adolfo-G/PWA-Text-Editor",
        image:"assets/images/pwa-textEditor.jpeg",
        description:"The goal for this project was to impliment a PWA strategy. This application functions as a text editor with word high lighting. IndexedDB is implemented in this application.",
    },
    {
        title: "My Blog",
        deployedAt: "https://my-blog-1029.herokuapp.com/",
        repo: "https://github.com/Adolfo-G/my-blog",
        image:"assets/images/blog.jpeg",
        description:"This application is a blog based page which allows for account creation and posting. Posts can be read and commented on by other users. This site was made using Bootstrap, Express.js, and MySQL / sequelize.",
    },
    {
        title: "Home Bazaar",
        deployedAt: "https://home-bazaar.herokuapp.com/",
        repo: "https://github.com/Adolfo-G/Home-Bazaar-eCommerce",
        image:"assets/images/HB-Homepage.png",
        description:"This project uses a MERN stack approach to building a eCommerce web site. This project was made with Apollo/GraphQL.",
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

