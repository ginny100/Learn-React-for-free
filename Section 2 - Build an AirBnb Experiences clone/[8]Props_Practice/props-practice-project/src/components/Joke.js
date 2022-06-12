import React from 'react'

export default function Joke(props) {
    return (
        <div>
            {/* <h3>Setup: {props.setup}</h3> */}
            {props.setup && <h3>Setup: {props.setup}</h3>}
            {/* <p>Punchline: {props.punchline}</p> */}
            <p style={{ display: props.punchline ? "block" : "none" }}>Punchline: {props.punchline}</p>
            {props.isPun ? <p>Pun Intended</p> : <p>No Pun Intended</p>}
            {props.upvotes && <h5>Upvotes: {props.upvotes}</h5>}
            {props.downvotes && <h5>Downvotes: {props.downvotes}</h5>}
            <hr />
        </div>
    )
}