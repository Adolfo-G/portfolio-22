import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


function Footer() {
    return (
        <footer className="footer">
            <h4 id="contact">Contact Me</h4>
                <div className='icon-container'>
                <a className="contact-text" href="mailto: adolfog5545@gmail.com"><div className='icons'><FontAwesomeIcon icon="envelope" size='5x' /></div></a>
                <a className="contact-text" href="https://www.linkedin.com/in/adolfo-gonzalez-566859222/"><div className='icons'><FontAwesomeIcon icon="fab fa-linkedin" size='5x'/></div></a>
                <a className="contact-text" href="https://github.com/Adolfo-G"><div className='icons'><FontAwesomeIcon icon="fab fa-github" size='5x' /></div></a>
                </div>
        </footer>
    );
}

export default Footer;