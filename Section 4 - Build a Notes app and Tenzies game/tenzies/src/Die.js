import React from "react"

export default function Die(props) {
    /**
     * Challenge: Add conditional styling to the Die component
     * so that if it's held (isHeld === true), its background color
     * changes to a light green (#59E391)
     * 
     * Remember: currently the Die component has no way of knowing
     * if it's "held" or not.
     */
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <div
            className="die-face"
            style={styles}
            onClick={props.holdDice}
        >
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}