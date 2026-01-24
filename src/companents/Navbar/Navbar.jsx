import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div class="navbar">
            <div class="container">
                <ul class="navbar__list">
                    <li><a class="navbar__link" href="#">Features</a></li>
                    <li><a class="navbar__link" href="#">Products</a></li>
                    <li><a class="navbar__link" href="#">Blog</a></li>
                    <li><a class="navbar__link" href="#">About</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar