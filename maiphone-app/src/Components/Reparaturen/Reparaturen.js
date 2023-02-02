import React from 'react';
import reparatur from "./reparatur.jpeg";
import hamitRepair from "./hamit-repair.jpeg";
import iphone from "./iphone.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from "../ContactForm/ContactForm";

export default function Reparaturen(props) {
    const styles = {
        component: {
            border: "1px solid red",
            width: "100%",
            height: `${props.height.componentHeight.reparaturen}vh`,
            backgroundColor: "black",
            position: "relative",
            textAlign: "center",
            color: "#33bff0",
            fontFamily: "Lato",
            fontWeight: "900",
            fontSize: "35px"
        },
        
    }
    return (
        <div style={styles.component}>
            <h2>Reparaturen</h2>
        </div>
    )
}