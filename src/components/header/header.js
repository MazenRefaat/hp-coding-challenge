/* Dependences related to Header component */
import React, { Component } from 'react';

/* App styles file import */
import './header.scss';

const Header = () => {
    return (
        <header className="hp-app__header">
            <nav>
                <a href="https://www.holidaypirates.com/" target="_blank">
                    <img src="https://www.holidaypirates.com/assets/blog/images/logos/new/logo-en-white.svg" alt="HolidayPirates" title="HolidayPirates"/>
                </a>
            </nav>
        </header>
    )
}


export default Header;