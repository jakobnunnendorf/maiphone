import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from "../ContactForm/ContactForm";
import InfoSlides from './InfoSlides/InfoSlides';

export default function Reparaturen(props) {
    const styles = {
        component: {
            width: "100%",
            height: props.version === "desktop" ? `${props.layout.reparaturen}vh` : "fit-content",

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",

            backgroundColor: "black",
        },
        img: {
            width: props.version === "desktop" ? "60%" : "100%",
            height: "150px",
            maxHeight: "200px",
            marginBottom: "0",
            marginTop: "5vh",
            
            objectFit: "cover",
        },
        h2: {
            marginTop: "15vh",
            color: "#33bff0",
            fontSize: "50px",
            marginBottom: "5vh"
        }
    }
    return (
        <div style={styles.component}>
            <h2 style={styles.h2}>Handy kaputt?</h2>
            <InfoSlides version={props.version}/>
            <ContactForm version={props.version}/>
        </div>
    )
}