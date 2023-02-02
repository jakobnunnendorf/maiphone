import React from 'react';

export default function Kontakt(props) {
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
        <h1>Kontakt</h1>
        </div>
    )
}
