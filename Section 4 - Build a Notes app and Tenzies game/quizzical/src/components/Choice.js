import React from "react"

export default function Choice(props) {
    let styles

    // Show results
    if (props.endGame) {
        if (props.isChosen) {
            // Red
            if (props.value !== props.correct_answer) {
                styles = {
                    backgroundColor: "#F6D9DB",
                    border: "none",
                    color: "#95b5f4"
                }
            }
        // Blurry
        } else {
            styles = {
                color: "#95b5f4",
                border: "none",
                borderWidth: "1.5px"
            }
        }

        // Green
        if (props.isCorrect) {
            styles = {
                backgroundColor: "#94d7a2",
                border: "none"
            }
        }
    // Hide results
    } else {
        if (props.isChosen) {
            styles = {
                backgroundColor: "#D6DBF5",
                border: "none"
            }
        }
    }

    // console.log("Props passed to Choice")
    // console.log(props)
    // console.log("Style of Choice")
    // console.log(styles)

    return (
        <button
            className="choice"
            style={styles}
            onClick={() => { if (!props.endGame) { props.choose() } }}
        >
            {props.value}
        </button>
    )
}