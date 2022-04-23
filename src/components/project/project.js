import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Project(props) {
        console.log(props)
    return (
        <div className="cell">
                        <div className="card">
                            <div className="image-effect">
                            <img src={props.project.image} />
                            </div>
                            <div className='text-effect'>
                                <div className="text">
                                    <a href={props.project.deployedAt}><h4 className='card-title'>{props.project.title}</h4></a>
                                    <div><a href={props.project.repo}><FontAwesomeIcon className='card-icon' icon="fab fa-github" size='3x' /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
    );
}

export default Project;