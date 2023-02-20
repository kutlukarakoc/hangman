type WordProps = {
    guessedLetters: string[],
    wordToGuess: string
}

const Word = ({guessedLetters, wordToGuess}: WordProps) => {

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
                        <span style={{visibility: guessedLetters.indexOf(letter) > -1 ? 'visible' : 'hidden'}}>
                            {letter}
                        </span>
                    </span>
                ))
            }
        </h1>
    )
}

export default Word;