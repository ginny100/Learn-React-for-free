import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img
                src="./images/troll-face.png"
                className="header--image"
            />
            <h3 className="header--title">Meme Generator</h3>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}