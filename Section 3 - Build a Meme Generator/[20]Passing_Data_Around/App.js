import React from "react"
import Header from "./Header"
import Body from "./Body"

export default function App() {
    const [user, setUser] = React.useState("Joe")

    return (
        <main>
            <Header user={user}/>
            <Body user={user}/>
        </main>
    )
}
