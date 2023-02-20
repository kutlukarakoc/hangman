import '../styles/drawing.css'
import HeadDrawing from './HeadDrawing';
import BodyDrawing from './BodyDrawing';
import { LeftArmDrawing, RightArmDrawing } from './ArmDrawing';
import { LeftLegDrawing, RightLegDrawing } from './LegDrawing';

type DrawingProps = {
    numberOfGuesses: number
}

const bodyParts = [<HeadDrawing/>, <BodyDrawing/>, <LeftArmDrawing/>, <RightArmDrawing/>, <LeftLegDrawing/>, <RightLegDrawing/>]

const Drawing = ({ numberOfGuesses }: DrawingProps) => {
    return (
        <div className="drawing__wrapper">
            <div className="drawing__top-line"></div>
            <div className="drawing__top-hook"></div>
            {
                bodyParts.slice(0, numberOfGuesses)
            }
            <div className="drawing__mid-line"></div>
            <div className="drawing__bottom-line"></div>
        </div>
    )
}

export default Drawing;