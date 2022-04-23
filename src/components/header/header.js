import React from 'react';
import Navbar from '../navbar/navbar';

function Header(props) {
    return (
        <header className="top-bar nav">
            <div className="top-bar-left nav">
                <ul className="menu nav">
                    <li className="menu-text my-name nav">Adolfo Gonzalez</li>
                </ul>
            </div>
            <Navbar currentPage={props.currentPage} handlePageChange={props.handlePageChange}/>
        </header>
        
    );
}

export default Header;