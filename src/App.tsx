import './app.css'
import { useState } from "react"
import words from "./words.json"
import Drawing from './components/Drawing'
import Keyboard from './components/Keyboard'
import Word from './components/Word'

function App() {

    const [wordToGuess, setWordToGuess] = useState(words[Math.floor(Math.random() * words.length)])

    return (
        <main className="container">
            <h1 style={{textAlign:"center"}}>Lose win</h1>

            <Drawing />
            <Keyboard />
            <Word />
        </main>
    )
}

export default App