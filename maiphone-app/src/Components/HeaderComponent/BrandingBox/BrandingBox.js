import React from 'react';
import logo from "./logo.png";


export default function BrandingBox() {
    const styles = {
        branding: {
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            height: "90%",
            width: "30%",
            marginLeft: "3vw",
            fontFamily: "Lato",
        },
        h1: {
            marginLeft: "1vw",
    
            textAlign: "center",
            lineHeight: 1.5
        }
    }
    return (
        <div style={styles.branding}>
            <img src={logo} alt="" className='rmbg'/>
            <h1 style={styles.h1}>Mai-Phone</h1>
        </div>
    )
}
