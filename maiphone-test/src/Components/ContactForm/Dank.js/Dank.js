import React from 'react';
import reparatur from "./reparatur.jpeg";

export default function Dank(props) {
    const styles = {
        component: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        img: {
            width: "100%",
            height: "150px",
            maxHeight: "200px",
            marginBottom: "0",
            marginTop: "5vh",
            
            objectFit: "cover",
            borderRadius: "10px",
        },
        h4: {
            color: "#33bff0",
            fontSize: "30px",
            textAlign: "center",
        },
    }
    return (
        <div style={styles.component}>
            <h4 style={styles.h4}>Vielen Dank, <br /> für Ihre Anfrage!</h4>
            <img src={reparatur} alt="" style={styles.img}/>
        </div>
    )
}
