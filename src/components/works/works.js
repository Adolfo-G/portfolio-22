import React from 'react';

const projects = [
    {
        title: "Electric Wipeout's Music Shop",
        description: "This application which is live on heroku is a demo music shop. It contains products to purchase, a logIn LogOut feature, a user cart, and an email confirmation once finished shopping.",
        contributers: "Contributers: Adolfo Gonzalez, Brittany Klose, Sam Meske",
        technologies: "Technologies Used: Node.js, Express, Handlebars, Node Mailer, Bootstrap",
        deployedAt: "https://mortal-instruments-music-shop.herokuapp.com/",
        repo: "https://github.com/smeske10/Electric-Wipeouts-Mortal-Instruments",
    },
    {
        title: "Weather Forecast",
        description: "This application will provide you with the temperature of a given city along with a 5 day forecast.",
        contributers: "Contributers: Adolfo Gonzalez",
        technologies: "Technologies Used: HTML, CSS JavaScript, Moment API, OpenWeatherMap API",
        deployedAt: "https://adolfo-g.github.io/Weather-Forecast/",
        repo: "https://github.com/Adolfo-G/Weather-Forecast",
    },
    {
        title: "Countdown Games!",
        description: "The following is a trivia quiz which can be replayed to try and increase your personal score.",
        contributers: "Contributers: Adolfo Gonzalez, Bowen Zheng, Maria Gonzalez, Caprice Dutton",
        technologies: "Technologies Used: JavaScript, GoogleFonts API, OpenTriviaDB API, RandomWords API, Foundation Framework",
        deployedAt: "https://adolfo-g.github.io/Countdown-Games/",
        repo: "https://github.com/Adolfo-G/Countdown-Games",
    },
]

function Works() {
    return (
        <div>
            <h4 id="works">Works</h4>
            <div className="grid-container">
                <div className="grid-x grid-margin-x small-up-1 medium-up-2">
                    <div className="cell">
                        <div className="card">
                            <div className="image-effect">
                                <img src="assets/images/music-shop.jpeg" />
                            </div>
                            <div className='text-effect'>
                                <div className="text">
                                    <h4>{projects[0].title}</h4>
                                    <p>Deployed App: <a href={projects[0].deployedAt}>Click here</a> Github Repo: <a href={projects[0].repo}>Click here</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="card">
                            <div className="image-effect">
                                <img src="assets/images/weather-preview.jpeg" />
                            </div>
                            <div className='text-effect'>
                                <div className="text">
                                    <h4>{projects[1].title}</h4>
                                    <p>{projects[1].technologies}</p>
                                    <p>Deployed App: <a href={projects[1].deployedAt}>Click here</a> Github Repo: <a href={projects[1].repo}>Click here</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="card">
                            <div className="image-effect">
                                <img src="assets/images/TriviaHomePage.png" />
                            </div>
                            <div className='text-effect'>
                                <div className="text">
                                    <h4>{projects[2].title}</h4>
                                    <p>Deployed App: <a href={projects[2].deployedAt}>Click here</a> Github Repo: <a href={projects[2].repo}>Click here</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Works;

