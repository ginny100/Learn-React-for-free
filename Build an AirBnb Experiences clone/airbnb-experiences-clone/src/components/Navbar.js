import React from 'react'
import AirBnbLogo from '../assets/images/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav>
            <img src={AirBnbLogo} className="nav--logo" />
        </nav>
    )
}