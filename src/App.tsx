import './styles/app.css';
import { useState, useEffect, useCallback } from "react"
import words from "./constants/words.json"
import Drawing from './components/Drawing'
import Keyboard from './components/Keyboard'
import Word from './components/Word'

function App() {

    const [wordToGuess, setWordToGuess] = useState(() => words[Math.floor(Math.random() * words.length)])
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])

    const incorrectLetters = guessedLetters.filter(letter => wordToGuess.indexOf(letter) < 0)

    const addGuessedLetters = useCallback((letter: string) => {
        if(guessedLetters.indexOf(letter) > -1) return

        setGuessedLetters(currentLetters => [...currentLetters, letter])
    }, [guessedLetters])

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key
            if(!key.match(/^[a-z]$/)) return

            e.preventDefault()

            addGuessedLetters(key)
        }

        document.addEventListener('keypress', handler)

        return () => document.removeEventListener('keypress', handler)
    }, [guessedLetters])

    return (
        <main className="container">
            <h1 style={{textAlign:"center"}}>Lose win</h1>

            <Drawing numberOfGuesses={incorrectLetters.length} />
            <Word guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
            <Keyboard />
        </main>
    )
}

export default App