import React from "react"
import Questionnaire from "./components/Questionnaire"

export default function App() {
    const [hasStarted, setHasStarted] = React.useState(false)

    function createNewQuiz() {
        setHasStarted(true)
    }

    return (
        <main>
            {
                hasStarted
                    ?
                    <Questionnaire />
                    :
                    <div className="welcome">
                        <h1>Quizzical</h1>
                        <p>Looking for a fun trivial quiz to play?</p>
                        <button
                            onClick={createNewQuiz}
                        >
                            Let's get started!
                        </button>
                    </div>
            }
        </main>
    )
}