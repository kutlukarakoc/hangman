import '../styles/drawing.css'
import HeadDrawing from './HeadDrawing';
import BodyDrawing from './BodyDrawing';
import { LeftArmDrawing, RightArmDrawing } from './ArmDrawing';
import { LeftLegDrawing, RightLegDrawing } from './LegDrawing';

const Drawing = () => {
    return (
        <div className="drawing__wrapper">
            <div className="drawing__top-line"></div>
            <div className="drawing__top-hook"></div>
            <HeadDrawing />
            <BodyDrawing />
            <LeftArmDrawing />
            <RightArmDrawing />
            <RightLegDrawing />
            <LeftLegDrawing />
            <div className="drawing__mid-line"></div>
            <div className="drawing__bottom-line"></div>
        </div>
    )
}

export default Drawing;