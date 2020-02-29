import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    render() {
        return(
            <header>
                <nav className="navbar">
                    <div className="navbar-div">
                        <h1 className="wayfarer-heading">WAYFARER</h1>
                        <ul className="nav-list">
                            <li className="login">Log in</li>
                            <li className="SignUp">Sign up</li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Nav;
