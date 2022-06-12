import React from "react"

export default function App() {
    const [count, setCount] = React.useState(0)

    function subtract() {
        setCount(count - 1)
        // Note that here, we cannot write count-- as this syntax is strictly forbidden in React
        // "count--" actually means "count = count - 1", which is update and reassign while we MUST NOT reassign state
    }

    function add() {
        setCount(count + 1)
        // Note that here, we cannot write count++ as this syntax is strictly forbidden in React
        // "count++" actually means "count = count + 1", which is update and reassign while we MUST NOT reassign state
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>-</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}
