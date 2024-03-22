import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css'
class Header extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg header' >
                <div className="container-fluid" >
                    <Link className="navbar-brand text-white" to="/">Movie <span style={{ color: "red" }}>Matcher</span></Link>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/profile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/profile">
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/128/9068/9068842.png"
                                        alt="Profile"
                                        style={{ width: "27px", height: "27px" }}
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
