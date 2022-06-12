import React from 'react'
import ProfilePic from '../assets/images/profile-pic.png'

export default function Header() {
    return (
        <nav className="header">
            <img src={ProfilePic} className="nav--profile-pic"/>
        </nav>
    )
}