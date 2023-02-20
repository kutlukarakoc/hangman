import { keys } from "../constants/keys";
import "../styles/keyboard.css";

type KeyboardProps = {
    activeLetters: string[],
    inactiveLetters: string[],
    addGuessedLetter: (letter: string) => void,
    disabled?: boolean
}

const Keyboard = ({ activeLetters, inactiveLetters, addGuessedLetter, disabled = false }: KeyboardProps) => {

    return (
        <h2 className="keyboard__wrapper">
            {
                keys.map(key => {
                    // Determine if the key is active or inactive based on whether it has been guessed or not
                    const isActive = activeLetters.indexOf(key) > -1
                    const isInActive = inactiveLetters.indexOf(key) > -1
                    return (
                        <button
                            type="button" 
                            className={`${isActive ? 'active-button' : ''} ${isInActive ? 'inactive-button' : ''}`}
                            // Disable the button if it has already been guessed or if the game is over
                            disabled={isInActive || isActive || disabled}
                            key={key} 
                            onClick={() => addGuessedLetter(key)}>{key}
                        </button>
                    )
                })
            }
        </h2>
    )
}

export default Keyboard;