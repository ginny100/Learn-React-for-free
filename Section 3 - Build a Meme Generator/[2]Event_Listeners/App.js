import React from "react"

export default function App() {
    function handleClick() {
        console.log("I was clicked!")
    }

    /**
     * Challenge: 
     * Log something to the console when the mouse hovers over the image
     */

    function handleOnMouseOver() {
        console.log("MouseOver")
    }


    return (
        <div className="container">
            <img
                src="https://picsum.photos/640/360"
                onMouseOver={handleOnMouseOver}
            />
            {/* When passing the handleClick function, just write its name without () */}
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
