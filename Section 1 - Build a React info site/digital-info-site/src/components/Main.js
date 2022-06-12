import React from 'react'

export default function Main() {
    return (
        <main>
            <h1 className="main--name">Ginny Dang</h1>
            <p className="main--title">Engineering Analyst</p>
            <p><a className="main--website" href="https://ginny100.github.io/" target="_blank">ginny100.github.io</a></p>
            <a className="main--email" href="mailto:khuedang1021@gmail.com" target="_blank">
                📧 Email
            </a>
            <h3 className="main--section">About</h3>
            <p className="main--section--content">
                I'm an active learner and hard worker who can devote time to learning and gaining experience consistently. I'm willing to learn from co-workers, school, friends, YouTubers, and every technophile I know.
            </p>
            <h3 className="main--section">Interests</h3>
            <p className="main--section--content">
                So far, I have been learning and exploring different areas of Computer Science and Software Engineering including
                <ul>
                    <li>Web Development</li>
                    <li>Cross-platform Mobile Development</li>
                    <li>Machine Learning</li>
                    <li>Artificial Intelligence</li>
                    <li>Data Structures & Algorithms</li>
                </ul>
            </p>
        </main>
    )
}