import React from 'react';



function Navbar({currentPage, handlePageChange}) {
    return (
        
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
                    {/* <li className="nav">
                        <a
                            onClick={() => handlePageChange('Contact')}
                            href="#Contact"
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >Contact
                        </a>
                        not working
                    </li> */}
                    <li className="nav">
                        <a
                            onClick={() => handlePageChange('Resume')}
                            href="#Resume"
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >Skills
                        </a>
                    </li>
                </ul>
            </div>
    );
}

export default Navbar;