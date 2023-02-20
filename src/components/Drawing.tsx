import '../styles/drawing.css'
import HeadDrawing from './HeadDrawing';
import BodyDrawing from './BodyDrawing';
import { LeftArmDrawing, RightArmDrawing } from './ArmDrawing';
import { LeftLegDrawing, RightLegDrawing } from './LegDrawing';

type DrawingProps = {
    numberOfGuesses: number
}

const Drawing = ({ numberOfGuesses }: DrawingProps) => {

    // Create an array with all the body parts of the drawing
    const bodyParts = [
        <HeadDrawing key={1} />,
        <BodyDrawing key={2} />,
        <LeftArmDrawing key={3} />,
        <RightArmDrawing key={4} />,
        <LeftLegDrawing key={5} />,
        <RightLegDrawing key={6} />
    ];

    return (
        <div className="drawing__wrapper">
            <div className="drawing__top-line"></div>
            <div className="drawing__top-hook"></div>
            {/* Render the body parts up to the number of incorrect guesses */}
            { bodyParts.slice(0, numberOfGuesses) }
            <div className="drawing__mid-line"></div>
            <div className="drawing__bottom-line"></div>
        </div>
    )
}

export default Drawing;