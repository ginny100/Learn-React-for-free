import React from "react"
import QuestionItem from "./QuestionItem"
import Score from "./Score"
import PlayAgain from "./PlayAgain"
import CheckAnswers from "./CheckAnswers"

export default function Questionnaire() {
    const [token, setToken] = React.useState("")
    const [questionnaire, setQuestionnaire] = React.useState([])
    const [hasFinished, setHasFinished] = React.useState(false)

    // A new session token is generated every time the user starts the game
    React.useEffect(() => {
        getToken()
    }, [])
    console.log(token)

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
    console.log(questionnaire)

    async function getToken() {
        const res = await fetch("https://opentdb.com/api_token.php?command=request")
        const data = await res.json()
        setToken(data.token)
    }

    const questionItems = questionnaire.map((item, index) => {
        const incorrectAnswers = item.incorrect_answers
        var allAnswers = incorrectAnswers.concat(item.correct_answer)

        function shuffle(array) {
            array.sort(() => Math.random() - 0.5);
        }

        shuffle(allAnswers)

        return (
            <QuestionItem
                key={index}
                question={item.question}
                answers={allAnswers}
            />
        )
    })

    return (
        <div className="questionnaire">
            {questionItems}
            <div className="quiz-ongoing">
                <CheckAnswers />
            </div>
            {/* <div className="quiz-complete">
                <Score />
                <PlayAgain />
            </div> */}
        </div>
    )
}