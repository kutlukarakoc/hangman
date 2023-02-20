const Word = ({guessedLetters}) => {

    let word = 'test'
    let testGuessedLetters = ['a','s','b','c','t'];

    return (
        <h1 style={{
            display: "flex",
            gap: "8px",
            fontWeight: "900",
            textTransform: "uppercase"
        }}>
            {
                word.split('').map((letter, key) => (
                    <span key={key} style={{ borderBottom: "4px solid #000" }}>
                        <span style={{visibility: testGuessedLetters.indexOf(letter) > -1 ? 'visible' : 'hidden'}}>
                            {letter}
                        </span>
                    </span>
                ))
            }
        </h1>
    )
}

export default Word;