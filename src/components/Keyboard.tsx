import { keys } from "../constants/keys";
import "../styles/keyboard.css";

const Keyboard = () => {

    const handleClick = target => {
        target.classList.add('clicked')
        target.disabled = true
    }

    return (
        <h2 className="keyboard__wrapper">
            {
                keys.map(key => <button type="button" key={key} onClick={(e) => handleClick(e.target)}>{key}</button>)
            }
        </h2>
    )
}

export default Keyboard;