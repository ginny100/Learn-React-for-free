import React from 'react'
import Joke from './components/Joke'

export default function App() {
    return (
        <div>
            <Joke
                setup="I got my daughter a fridge for her birthday."
                punchline="I can't wait to see her face light up when she opens it."
                isPun={false}
                upvotes={11}
                downvotes={3}
            />
            <Joke
                setup="How did the hacker escape the police?"
                punchline="He just ransomware!"
                isPun={true}
                upvotes={8}
                downvotes={9}
            />
            <Joke
                setup="Why don't pirates travel on mountain roads?"
                punchline="Scurvy."
                isPun={true}
                upvotes={5}
                downvotes={1}
            />
            <Joke
                setup="Why do bees stay in the hive in the winter?"
                punchline="Swarm."
                isPun={true}
                upvotes={12}
                downvotes={4}
            />
            <Joke
                setup="What's the best thing about Switzerland?"
                punchline="I don't know, but the flag is a big plus!"
                isPun={false}
                upvotes={7}
                downvotes={5}
            />
            <Joke 
                punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
                isPun={true}
                upvotes={10}
                downvotes={2}
                comments={[{author: "", body: "", title: ""}]}
            />
        </div>
    )
}
