export const LeftArmDrawing = () => {
    return <div style={{
        width: "55px",
        height: "5px",
        position: "absolute",
        top: "125px",
        right: "-5px",
        backgroundColor: "#000",
        rotate: "-30deg",
        transformOrigin: "left top"
    }}/>
}

export const RightArmDrawing = () => {
    return <div style={{
        width: "55px",
        height: "5px",
        position: "absolute",
        top: "125px",
        right: "-45px",
        backgroundColor: "#000",
        rotate: "30deg",
        transformOrigin: "right top"
    }}/>
}