export const LeftLegDrawing = () => {
    return <div style={{
        width: "55px",
        height: "5px",
        position: "absolute",
        bottom: "130px",
        right: "-28px",
        backgroundColor: "#000",
        rotate: "-60deg",
        transformOrigin: "left bottom"
    }}/>
}

export const RightLegDrawing = () => {
    return <div style={{
        width: "55px",
        height: "5px",
        position: "absolute",
        bottom: "130px",
        right: "-22px",
        backgroundColor: "#000",
        rotate: "60deg",
        transformOrigin: "right bottom"
    }}/>
}