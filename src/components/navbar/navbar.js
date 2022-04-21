import React from 'react';



function Navbar({currentPage, handlePageChange}) {
    return (
        <header className="top-bar nav">
            <div className="top-bar-left nav">
                <ul className="menu nav">
                    <li className="menu-text my-name nav">Adolfo Gonzalez</li>
                </ul>
            </div>
            <div className="top-bar-right nav">
                <ul className="menu nav">
                    <li className="nav">
                        <a
                            onClick={() => handlePageChange('About')}
                            href="#About"
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >About Me
                        </a>
                    </li>
                    <li className="nav">
                        <a
                            onClick={() => handlePageChange('Work')}
                            href="#Works"
                            className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
                        >Works
                        </a>
                    </li>
                    <li className="nav">
                        <a
                            onClick={() => handlePageChange('Contact')}
                            href="#Contact"
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >Contact
                        </a>
                    </li>
                    <li className="nav"><a href="assets/docs/resume.pdf" download="Resume">Download Resume</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;