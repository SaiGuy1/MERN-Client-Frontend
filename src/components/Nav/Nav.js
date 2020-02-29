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
                            <button className="login">Log in</button>
                            <button className="SignUp">Sign up</button>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Nav;
