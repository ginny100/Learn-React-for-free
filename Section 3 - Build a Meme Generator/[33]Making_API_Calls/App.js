import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})

    // 1. GET the data (fetch)
    // 2. Save the data to state

    /* Doing the following code will make us stuck in an infinite loop.
     * The fetch() method lives at the top level of our component,
     * therefore, anytime the component renders, it's gonna call fetch.
     * Then, every time fetch is called, it's gonna call setStarWarsData, which is updating our state.
     * All this causes React to rerender the whole component, 
     * and then the whole process starts all over again resulting in an infinite loop.
    console.log("Component rendered")

    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(data))
    */

    /* Now, don't set state when calling fetch */
    console.log("Component rendered")

    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => console.log(data))

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}