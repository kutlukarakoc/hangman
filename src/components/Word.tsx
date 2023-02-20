type WordProps = {
    guessedLetters: string[],
    wordToGuess: string,
    revealWord?: boolean
}

const Word = ({guessedLetters, wordToGuess, revealWord = false}: WordProps) => {

    return (
        <h1 style={{
            display: "flex",
            gap: "8px",
            fontWeight: "900",
            textTransform: "uppercase"
        }}>
            {
                wordToGuess.split('').map((letter, key) => (
                    <span key={key} style={{ borderBottom: "4px solid #000", width: "25px", textAlign: "center" }}>
                        <span 
                            style={{
                                visibility: guessedLetters.indexOf(letter) > -1 || revealWord ? 'visible' : 'hidden',
                                color: guessedLetters.indexOf(letter) < 0 && revealWord ? 'red' : 'green'  
                            }}
                        >
                            {letter}
                        </span>
                    </span>
                ))
            }
        </h1>
    )
}

export default Word;