import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default function Card() {
    return (
        <div className="card">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}