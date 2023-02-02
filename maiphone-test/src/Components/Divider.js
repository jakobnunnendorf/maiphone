import React from "react";

export default function Divider(props){
    const styles = {
        divider_section: {
            border: props.border === "true" ? "1px solid red" : "none",
            display: "block",
            position: "relative",
            width: "100%",
            height: props.height,
        },
        upperBar: {
            width: "100%",
            height: "50%",
            backgroundColor: props.upperColor,
        },
        lowerBar: {
            width: "100%",
            height: "50%",
            backgroundColor: props.lowerColor,
        },
        arrow: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%) rotate(45deg)",
            height: "70%",
            aspectRatio: "1",
            backgroundColor: props.upperColor,
            borderBottom: "black solid 1px",
            borderRight: "black solid 1px",
        }
    }
    return (
            <div style={styles.divider_section} id="dividerA">
                <div style={styles.upperBar}></div>
                <div style={styles.arrow}></div>
                <div style={styles.lowerBar}></div>
            </div>
        )
}
