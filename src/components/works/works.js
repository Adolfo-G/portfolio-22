import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

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
                    <div className="cell">
                        <div className="card">
                            <div className="image-effect">
                                <img src={projects[0].image} />
                            </div>
                            <div className='text-effect'>
                                <div className="text">
                                    <a href={projects[0].deployedAt}><h4 className='card-title'>{projects[0].title}</h4></a>
                                    <div><a href={projects[0].repo}><FontAwesomeIcon className='card-icon' icon="fab fa-github" size='3x' /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="card">
                            <div className="image-effect">
                            <img src={projects[1].image} />
                            </div>
                            <div className='text-effect'>
                                <div className="text">
                                    <a href={projects[1].deployedAt}><h4 className='card-title'>{projects[1].title}</h4></a>
                                    <div><a href={projects[1].repo}><FontAwesomeIcon className='card-icon' icon="fab fa-github" size='3x' /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="card">
                            <div className="image-effect">
                            <img src={projects[2].image} />
                            </div>
                            <div className='text-effect'>
                                <div className="text">
                                    <a href={projects[2].deployedAt}><h4 className='card-title'>{projects[2].title}</h4></a>
                                    <div><a href={projects[2].repo}><FontAwesomeIcon className='card-icon' icon="fab fa-github" size='3x' /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="card">
                            <div className="image-effect">
                            <img src={projects[3].image} />
                            </div>
                            <div className='text-effect'>
                                <div className="text">
                                    <a href={projects[3].deployedAt}><h4 className='card-title'>{projects[3].title}</h4></a>
                                    <div><a href={projects[3].repo}><FontAwesomeIcon className='card-icon' icon="fab fa-github" size='3x' /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="card">
                            <div className="image-effect">
                            <img src={projects[4].image} />
                            </div>
                            <div className='text-effect'>
                                <div className="text">
                                    <a href={projects[4].deployedAt}><h4 className='card-title'>{projects[4].title}</h4></a>
                                    <div><a href={projects[4].repo}><FontAwesomeIcon className='card-icon' icon="fab fa-github" size='3x' /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cell">
                        <div className="card">
                            <div className="image-effect">
                            <img src={projects[5].image} />
                            </div>
                            <div className='text-effect'>
                                <div className="text">
                                    <a href={projects[5].deployedAt}><h4 className='card-title'>{projects[5].title}</h4></a>
                                    <div><a href={projects[5].repo}><FontAwesomeIcon className='card-icon' icon="fab fa-github" size='3x' /></a></div>
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

