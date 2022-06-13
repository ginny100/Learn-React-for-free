import React from "react"

export default function Header(props) {
    /**
     * Challenge:
     * Raise state up a level and pass it down to both the
     * Header and Body components through props.
     */

    return (
        <header>
            <p>Current user: {props.user}</p>
        </header>
    )
}