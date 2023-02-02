import React from 'react';

export default function Zubehör(props) {
    const styles = {
        div: {
            border: "3px solid red",
            width: "100%",
            height: `${props.height}vh`,
            backgroundColor: "white"
        }
    }
    return (
        <div style={styles.div}>
        <h1>Zubehör</h1>
        </div>
    )
}
