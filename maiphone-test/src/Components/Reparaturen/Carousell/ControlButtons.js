import React from 'react';

export default function ControlButtons(props) {
    const styles={
        wrapper: {
            position: "absolute",
            bottom: "3vh",
            left: "50%",
            
            width: "fit-content",
            height: "25px",
            transform: "translateX(-50%)",
            borderRadius: "15px",

            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",

            backgroundColor: "white",
            opacity: 0.7,
        },
        circle: {
            margin: "0 5px",
            height: "60%",
            aspectRatio: 1,
            borderRadius: "50%",
            backgroundColor: "black",
            opacity: 0.5,
            cursor: "pointer",
        }
    }
    const circles = props.pictures.map(
        (link, index) => {
            return(
            <div
            style={{
                ...styles.circle,
                backgroundColor: props.activeIndex === index ? "lightgray" : "black",
            }}
            index={index}
            onClick={() => props.setActive(link,index)}></div>)});

return (
    <div style={styles.wrapper}>
        {circles}
    </div>
    )
}
