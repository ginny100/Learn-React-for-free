import React from "react"

export default function App() {
    const [result, func] = React.useState("Yes")
    /* console.log(result)
     * result is the state
     * result is "Yes" 
     * You can call "result" literally whatever you want */
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{result[0]}</h1>
            </div>
        </div>
    )
}
