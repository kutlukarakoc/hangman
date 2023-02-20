import './app.css'
import { useState } from "react"
import words from "./words.json"

function App() {

    const [wordToGuess, setWordToGuess] = useState(words[Math.floor(Math.random() * words.length)]);

    return (
        <main className="container">
            <h1 style={{textAlign:"center"}}>Lose win</h1>

            <div>{wordToGuess}</div>
        </main>
    )
}

export default App