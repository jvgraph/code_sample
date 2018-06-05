import React, { Component } from 'react';
import logo from './../../logo.svg';

class Header extends Component {
  render() {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src={logo} className="App-logo" alt="Sparta Plaesent" />  
                </div>
                <button className="menu--icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav className="site--nav">
                    <ul>
                        <li>
                            <a href="#">
                                212-555-5555
                            </a>
                        </li>
                        <li>
                            <a href="#">login</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
  }
}

export default Header;