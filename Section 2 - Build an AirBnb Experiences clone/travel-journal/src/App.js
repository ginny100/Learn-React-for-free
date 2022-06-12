import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

export default function App() {
    const cards = data.map(card => {
        return (
            <div>
                <Card
                    key={card.id}
                    item={card}
                />
                <hr
                    style={{
                        backgroundColor: '#918E9B',
                        height: 0.5
                    }}
                />
            </div>
        )
    })

    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}