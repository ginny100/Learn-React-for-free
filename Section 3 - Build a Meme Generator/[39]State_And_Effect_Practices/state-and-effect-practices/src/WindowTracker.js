import React from "react"

export default function WindowTracker() {
    /**
     * Challenge:
     * 1. Create state called `windowWidth`, default to 
     *    `window.innerWidth`
     * 2. When the window width changes, update the state
     * 3. Display the window width in the h1 so it updates
     *    every time it changes
     */

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        function watchWidth() {
            console.log("Setting up...")
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", watchWidth)

        /* Cleanup function
         * When React run the above useEffect function, it will receive in return another function it can use to
         * clean up any side effects that you might have created (this helps prevent memory leak in this case) */
        return function() {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}

/* Recap: useEffect cleanup function
 * useEffect() takes 2 params: 
 * (1) the effect you wanna run and (2) any dependencies React should watch for changes to rerun the effect function.
 * That effect function is allowed to return a function 
 * that can clean up after any side effect that might be lingering in case you component dies.
 * However, clean-up function is optional, it's not required for our effect function to work. */