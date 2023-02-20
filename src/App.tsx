import './styles/app.css';
import { useState } from "react"
import words from "./constants/words.json"
import Drawing from './components/Drawing'
import Keyboard from './components/Keyboard'
import Word from './components/Word'

function App() {

    const [wordToGuess, setWordToGuess] = useState(words[Math.floor(Math.random() * words.length)])
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])

    const incorrectLetters = guessedLetters.filter(letter => wordToGuess.indexOf(letter) < 0)

    return (
        <main className="container">
            <h1 style={{textAlign:"center"}}>Lose win</h1>

            <Drawing numberOfGuesses={incorrectLetters.length}/>
            <Word guessedLetters={guessedLetters}/>
            <Keyboard />
        </main>
    )
}

export default App