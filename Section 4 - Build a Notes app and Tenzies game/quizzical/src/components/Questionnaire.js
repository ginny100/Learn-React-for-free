import React from "react"
import QuestionItem from "./QuestionItem"

export default function Questionnaire() {
    const [token, setToken] = React.useState("")
    const [questionnaire, setQuestionnaire] = React.useState([])
    const [endGame, setEndGame] = React.useState(false)

    // A new session token is generated every time the user starts the game
    React.useEffect(() => {
        getToken()
    }, [])
    // console.log(token)

    // Generate a new questionnaire of 10 questions with the current session token
    React.useEffect(() => {
        async function getQuestionnaire() {
            const res = await fetch("https://opentdb.com/api.php?amount=10&type=multiple&token=" + token)
            const data = await res.json()
            // When the session token has expired -> generate a new one
            if (data.response_code === 4) {
                getToken()
            }
            setQuestionnaire(data.results)
        }
        getQuestionnaire()
    }, [])
    // console.log(questionnaire)

    async function getToken() {
        const res = await fetch("https://opentdb.com/api_token.php?command=request")
        const data = await res.json()
        setToken(data.token)
    }

    const questionItems = questionnaire.map((item, index) => {
        const allAnswers = item.incorrect_answers
        allAnswers.push(item.correct_answer)

        // console.log('New item:')
        // console.log(item)
        // console.log(item.correct_answer)
        // console.log(item.incorrect_answers)
        // console.log(allAnswers)

        function shuffle(array) {
            array.sort(() => Math.random() - 0.5);
        }

        shuffle(allAnswers)
        console.log(allAnswers);

        return (
            <QuestionItem
                key={index}
                question={item.question}
                answers={allAnswers}
                correctAnswer={item.correct_answer}
                endGame={endGame}
            />
        )
    })

    function checkAnswers() {
        setEndGame(true)
    }

    return (
        <div className="questionnaire">
            {questionItems}
            {
                endGame
                    ?
                    <div className="quiz-complete">
                        {/* <h3>You scored {score}/10 correct answers</h3> */}
                        <h3>You scored 10/10 correct answers</h3>
                        <button
                            className="questionnaire-button"
                        // onClick={checkAnswers}
                        >
                            Play again
                        </button>
                    </div>
                    :
                    <div className="quiz-ongoing">
                        <button
                            className="questionnaire-button"
                            onClick={checkAnswers}
                        >
                            Check answers
                        </button>
                    </div>
            }
        </div>
    )
}