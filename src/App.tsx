import './styles/app.css';
import { useState, useEffect, useCallback } from "react"
import words from "./constants/words.json"
import Drawing from './components/Drawing'
import Keyboard from './components/Keyboard'
import Word from './components/Word'

function App() {

    // Set the initial state of the word to guess
    const [wordToGuess, setWordToGuess] = useState(() => words[Math.floor(Math.random() * words.length)])

    // Set the initial state of the guessed letters
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])

    // Calculate the incorrect letters that have been guessed
    const incorrectLetters = guessedLetters.filter(letter => wordToGuess.indexOf(letter) < 0)

    // Check if the game has been won or lost
    const isWinner = wordToGuess.split('').every(letter => guessedLetters.indexOf(letter) > -1)
    const isLoser = incorrectLetters.length > 5

    // Function to add a guessed letter to the state
    const addGuessedLetter = useCallback((letter: string) => {
        if(guessedLetters.indexOf(letter) > -1 || isLoser || isWinner) return

        setGuessedLetters(currentLetters => [...currentLetters, letter])
    }, [guessedLetters, isWinner, isLoser])

    // Add an event listener to detect keyboard input and update the state accordingly
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key
            if(!key.match(/^[a-z]$/)) return

            e.preventDefault()

            addGuessedLetter(key)
        }

        document.addEventListener('keypress', handler)

        return () => document.removeEventListener('keypress', handler)
    }, [guessedLetters])

    return (
        <main className="container">
            <h1 style={{textAlign:"center"}}>
                {isWinner && 'Congratz! - Refrest to try again'}
                {isLoser && 'Maybe next time! - Refrest to try again'}
            </h1>

            <Drawing numberOfGuesses={incorrectLetters.length} />
            <Word guessedLetters={guessedLetters} wordToGuess={wordToGuess} revealWord={isLoser}/>
            <Keyboard 
                activeLetters={guessedLetters.filter(letter => wordToGuess.indexOf(letter) > -1)} 
                inactiveLetters={incorrectLetters}
                addGuessedLetter={addGuessedLetter}
                disabled={isWinner || isLoser}
            />
        </main>
    )
}

export default App