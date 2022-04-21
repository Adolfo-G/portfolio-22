import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

library.add(fab ,faLinkedin, faGithub, faEnvelope, )

ReactDOM.render(<App />, document.getElementById('root'));