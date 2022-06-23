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
            "isChosen": false,
        }
    )))

    // Determine if each question item gets point
    const [point, setPoint] = React.useState(0)

    // console.log("Props passed to QuestionItem")
    // console.log(props)
    // console.log("Correct answer")
    // console.log(props.correctAnswer)
    // console.log("All answers")
    // console.log(answers)

    const options = answers.map((answer, index) => (
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
        // console.log("id: ", id)
        // console.log("answers[id].isChosen: ", answers[id].isChosen)
        // console.log("answers[id].value: ", answers[id].value)
        // console.log("props.correctAnswer: ", props.correctAnswer)
    }

    // toggle Choice -> update answers -> update point for QuestionItem -> send new point to Questionaire

    React.useEffect(() => {
        // update point
        let newPoint = 0
        for (let i = 0; i < answers.length; i++) {
            if (answers[i].isChosen && answers[i].value === props.correctAnswer) {
                newPoint = 1
                break
            }
        }
        setPoint(newPoint)
    }, [answers])

    // Update question item point
    React.useEffect(() => {
        props.point(point)
    }, [point])

    React.useEffect(() => {
        if (!props.endGame) {
            setAnswers(props.answers.map((answer) => (
                {
                    "value": answer,
                    "isChosen": false,
                }
            )))
            setPoint(0)
        }
    }, [props.endGame])

    return (
        <div>
            <h3>{props.question}</h3>
            {options}
            <hr />
        </div>
    )
}