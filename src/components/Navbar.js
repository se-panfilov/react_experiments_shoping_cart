import React from 'react';
import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brande-logo">Shopping</Link>
                <ul className="right">
                    <li>
                        <Link to="/">Shop</Link>
                    </li>
                    <li>
                        <Link to="/cart">My cart</Link>
                    </li>
                    <li>
                        <Link to="/cart">Chopping cart</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

}