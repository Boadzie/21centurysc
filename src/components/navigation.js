import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <nav id="main-menu">
            <div className="container">
                <div className="logo">
                    <Link to='/'>21st Century Skills</Link>
                </div>
                <div className="menu-list">
                    <Link to='/discover'>Discover</Link>
                    <Link to='/develop'>Develop</Link>
                    <Link to='/use'>Use</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/signUp'>Sign Up</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;