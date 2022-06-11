import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

/*
Challenge: Build the Hero component.
Check the Figma file for the design specifics.
*/

/*
Challenge: Pass props to the Card component and display that data
- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)
*/

/*
Challenge:
- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar (in place of the current <Card /> component)
Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
                // {...item} //Spread syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
            />
        )
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}