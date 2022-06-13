import React from "react"
import boxes from "./boxes"
import Box from "./components/Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)

    /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function
     */

    function toggle(id) {
        /**
         * Challenge: use setSquares to update the
         * correct square in the array.
         * 
         * Make sure not to directly modify state!
         * 
         * Hint: look back at the lesson on updating arrays
         * in state if you need a reminder on how to do this
         */

        // // Method 1: Using a C-styled for loop
        // setSquares(prevSquares => {
        //     const newSquares = []
        //     for (let i = 0; i < prevSquares.length; i++) {
        //         const currentSquare = prevSquares[i]
        //         if (currentSquare.id === id) {
        //             const updatedSquare = {
        //                 ...currentSquare,
        //                 on: !currentSquare.on
        //             }
        //             newSquares.push(updatedSquare)
        //         } else {
        //             newSquares.push(currentSquare)
        //         }
        //     }
        //     return newSquares
        // })

        // Method 2: Using .map() method
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }

    const squareElements = squares.map(square => (
        <Box
            key={square.id}
            on={square.on}
            toggle={() => toggle(square.id)}
        />
    ))

    return (
        <main>
            {squareElements}
        </main>
    )
}