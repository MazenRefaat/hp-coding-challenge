/* Dependences related to Header component */
import React, { Component } from 'react';

/* App styles file import */
import './header.scss';

const Header = () => {
    return (
        <header className="hp-header">
            <nav className="hp-header__nav">
                <a className="hp-header__link" href="https://www.holidaypirates.com/" target="_blank">
                    <img className="hp-header__logo" src="https://www.holidaypirates.com/assets/blog/images/logos/new/logo-en-white.svg" alt="HolidayPirates" title="HolidayPirates"/>
                </a>
            </nav>
        </header>
    )
}


export default Header;