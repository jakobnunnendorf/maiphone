import React from 'react';
import logo from "./logo.png";


export default function BrandingBox() {
    const styles = {
        branding: {
            height: "90%",
            width: "auto",

            marginLeft: "1vw",

            display: "flex",
            justifyContent: "left",
            alignItems: "center",

            fontFamily: "Lato",
        },
        h3: {
            marginLeft: "1vw",
    
            textAlign: "center",
            lineHeight: 1.5
        },
        logo: {
            height: "70%",
            objectFit: "contain",        }
    }
    return (
        <div style={styles.branding}>
            <img src={logo} alt="" className='rmbg' style={styles.logo}/>
            <h3 style={styles.h3}>Mai-Phone</h3>
        </div>
    )
}
