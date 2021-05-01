import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <h2>Shortly</h2>
                <ul>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Resources</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                <a href="#">Login</a>
                <a href="#">Sign Up</a>
            </div>
        </div>
    )
}

export default Navbar
