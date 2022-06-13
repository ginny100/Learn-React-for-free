import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState(["a", "b"])
    /**
     * Challenge:
     * - Only display the <h1> below if there are unread messages
     */
    return (
        <div>
            {
                messages.length > 0 &&
                <h1>You have {messages.length} unread messages!</h1>
            }
        </div>
    )
}
