import React from "react"

export default function QuestionItem(props) {
    const answers = props.answers

    const answerButtons = answers.map((answer, index) => (
        <button
            key={index}
            className="answer"
            onClick={chooseAnswer}
        >
            {answer}
        </button>
    ))

    function chooseAnswer() {

    }

    return (
        <div>
            <h3>{props.question}</h3>
            <div>
                {answerButtons}
            </div>
            <hr />
        </div>
    )
}