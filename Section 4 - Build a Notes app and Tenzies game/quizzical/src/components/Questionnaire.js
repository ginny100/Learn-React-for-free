import React from "react"
import QuestionItem from "./QuestionItem"

export default function Questionnaire() {
    const [token, setToken] = React.useState("")
    const [questionnaire, setQuestionnaire] = React.useState([])
    const [endGame, setEndGame] = React.useState(false)
    const [itemPoints, setItemPoints] = React.useState(Array(10).fill(0)) // items = [0,0,0,0,0,0,0,0,0,0]
    const [score, setScore] = React.useState(0)

    // A new session token is generated every time the user starts the game
    React.useEffect(() => {
        getToken()
    }, [])
    // console.log(token)

    async function getQuestionnaire() {
        let res = await fetch("https://opentdb.com/api.php?amount=10&type=multiple&token=" + token)
        let data = await res.json()
        // When the session token has expired -> generate a new one

        // Test token
        // while (data.response_code !== 4) {
        //     console.log(data)
        //     res = await fetch("https://opentdb.com/api.php?amount=10&type=multiple&token=" + await getToken())
        //     data = await res.json()
        // }
        // console.log(data)

        if (data.response_code === 4) {
            res = await fetch("https://opentdb.com/api.php?amount=10&type=multiple&token=" + await getToken())
            data = await res.json()
            console.log(data)
        }
        setQuestionnaire(data.results)
        setEndGame(false)
        setItemPoints(Array(10).fill(0))
        setScore(0)
    }

    // Generate a new questionnaire of 10 questions with the current session token
    React.useEffect(() => {
        getQuestionnaire()
    }, [])
    // console.log(questionnaire)

    async function getToken() {
        const res = await fetch("https://opentdb.com/api_token.php?command=request")
        const data = await res.json()
        setToken(data.token)
        return data.token
    }

    const questionItems = questionnaire.map((item, index) => {
        const allAnswers = [...item.incorrect_answers];
        allAnswers.push(item.correct_answer)

        console.log('New item:')
        console.log(item)
        console.log(item.correct_answer)
        console.log(item.incorrect_answers)
        console.log(allAnswers)

        function shuffle(array) {
            array.sort(() => Math.random() - 0.5);
        }

        shuffle(allAnswers)
        // console.log(allAnswers);

        return (
            <QuestionItem
                key={index}
                question={item.question}
                answers={allAnswers}
                correctAnswer={item.correct_answer}
                endGame={endGame}
                point={(newPoint) => { updatePoint(index, newPoint) }}
            />
        )
    })

    console.log(questionItems);
    console.log(questionnaire);

    function checkAnswers() {
        setEndGame(true)
        calcScore()
    }

    // Passed to the child component
    function updatePoint(id, newPoint) {
        // console.log('id')
        // console.log(id)
        // console.log('newPoint')
        // console.log(newPoint)
        setItemPoints((prevItemPoints) => {
            // return [...prevItemPoints, prevItemPoints[id] = newPoint]
            let newItemPoints = [...prevItemPoints]
            newItemPoints[id] = newPoint
            return newItemPoints
        })
    }

    function calcScore() {
        // console.log(itemPoints)
        setScore(itemPoints.reduce((a, b) => a + b, 0))
        // console.log(score)
    }

    return (
        <div className="questionnaire">
            {questionItems}
            {
                endGame
                    ?
                    <div className="quiz-complete">
                        <h3>You scored {score}/10 correct answers</h3>
                        <button
                            className="questionnaire-button"
                            onClick={getQuestionnaire}
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