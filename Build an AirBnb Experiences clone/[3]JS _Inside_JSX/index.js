import React from "react"
import ReactDOM from "react-dom"

function App() {
    const firstName = "John"
    const lastName = "Doe"
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    /**
     * Challenge: finish off the h1 below so it says
     * "Hello John Doe!"
     */

    return (
        /*
         * Everything inside {} is JavaScript code and is run just as regular JavaScript
         */
        <div>
            <h1>Hello {firstName} {lastName}!</h1>
            <h1>It is currently about {date.getHours() % 12} o clock!</h1>
            <h1>Good {timeOfDay}!</h1>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))