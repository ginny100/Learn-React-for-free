import React from "react"
import Joke from "./Joke"

/*
Challenge: turn the strings in the array into <h3> elements instead
*/

export default function App() {
    const colors = [
        <h3>Red</h3>, 
        <h3>Orange</h3>, 
        <h3>Yellow</h3>,
        <h3>Green</h3>,
        <h3>Blue</h3>,
        <h3>Indigo</h3>,
        <h3>Violet</h3>
    ]
    return (
        <div>
            
        </div>
    )
}
            // <Joke 
            //     punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
            // />
            // <Joke 
            //     setup="I got my daughter a fridge for her birthday." 
            //     punchline="I can't wait to see her face light up when she opens it." 
            //     isPun={false}
            // />
            // <Joke 
            //     setup="How did the hacker escape the police?" 
            //     punchline="He just ransomware!"
            //     isPun={true}
            // />
            // <Joke 
            //     setup="Why don't pirates travel on mountain roads?" 
            //     punchline="Scurvy." 
            //     isPun={true}
            // />
            // <Joke 
            //     setup="Why do bees stay in the hive in the winter?" 
            //     punchline="Swarm." 
            //     isPun={true}
            // />
            // <Joke 
            //     setup="What's the best thing about Switzerland?" 
            //     punchline="I don't know, but the flag is a big plus!" 
            //     isPun={false}
            // />