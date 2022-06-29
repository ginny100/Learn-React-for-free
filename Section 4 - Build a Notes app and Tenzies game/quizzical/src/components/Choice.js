import React from "react"

export default function Choice(props) {
    const [styles, setStyles] = React.useState({})

    React.useEffect(() => {
        // Show results
        if (props.endGame) {
            if (props.isChosen) {
                if (!props.isCorrect) {// 
                    // Red
                    setStyles({
                        backgroundColor: "#F6D9DB",
                        border: "none",
                        color: "#95b5f4"
                    })
                } else {
                    // Green
                    setStyles({
                        backgroundColor: "#94d7a2",
                        borderWidth: "1.5px",
                        color: "#293264"
                    })
                }
            } else { // is not chosen 
                if (!props.isCorrect) {
                    // Blurry - Blue
                    setStyles({
                        color: "#95b5f4",
                        border: "none",
                        borderWidth: "1.5px"
                    })
                } else {
                    setStyles({
                        backgroundColor: "#94d7a2",
                        border: "none",
                        color: "#293264"
                    })
                }

            }
            // Hide results
        } else {
            if (props.isChosen) {
                // Blue
                setStyles({
                    backgroundColor: "#D6DBF5",
                    border: "none"
                })
            } else {
                // Nothing changed
                setStyles({})
            }
        }
    }, [props.endGame, props.isCorrect, props.isChosen])

    // console.log("Props passed to Choice")
    // console.log(props)
    // console.log("Style of Choice")
    // console.log(styles)

    return (
        <button
            className="choice"
            style={styles}
            onClick={() => { if (!props.endGame) { props.choose() } }}
            dangerouslySetInnerHTML={{ __html: props.value }}
        >
        </button>
    )
}