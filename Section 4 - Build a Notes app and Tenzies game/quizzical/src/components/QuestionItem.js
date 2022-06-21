import React from "react"
import Choice from "./Choice"

export default function QuestionItem(props) {
    /* 
     * props.answers looks like ["string1", ...]
     * we need to turn it to [{ "value" : "string1", "isChosen" : true/false }, ... ]
     */
    const [answers, setAnswers] = React.useState(props.answers.map((answer) => (
        {
            "value": answer,
            "isChosen": false
        }
    )))

    console.log("Props passed to QuestionItem")
    console.log(props)
    console.log("Correct answer")
    console.log(props.correctAnswer)
    console.log("All answers")
    console.log(answers)

    const choices = answers.map((answer, index) => (
        <Choice
            key={index}
            value={answer.value}
            isChosen={answer.isChosen}
            choose={() => toggle(index)}
            isCorrect={props.correctAnswer === answer.value}
            endGame={props.endGame}
        />
    ))

    function toggle(id) {
        setAnswers(prevAnswers => {
            return prevAnswers.map((answer, index) => {
                return index === id ?
                    { ...answer, isChosen: !answer.isChosen } :
                    { ...answer, isChosen: false }
            })
        })
    }

    return (
        <div>
            <h3>{props.question}</h3>
            {choices}
            <hr />
        </div>
    )
}