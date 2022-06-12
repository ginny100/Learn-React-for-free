import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <nav>
            <div className="nav--icon">
                <FontAwesomeIcon icon={faEarthAmericas} />
            </div>
            <h1 className="nav--title">my travel journal.</h1>
        </nav>
    )
}