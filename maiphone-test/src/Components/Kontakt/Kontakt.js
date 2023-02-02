import React from 'react';
import visite from "./visite.png";
import map from "./map.png";


export default function Kontakt(props) {
    const styles = {
        div: {
            width: "100%",
            height: `${props.height}vh`,

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "black",
            color: "#33bff0",
        },
        wrapper: {
            display: "flex",
            flexDirection: props.version === "desktop" ? "row" : "column",
            justifyContent: "space-around",
            alignItems: "center",
            width: props.version === "desktop" ? "60%" : "100%",
            height: "fit-content",
            textAlign: "center",
        },
        h3: {
            marginTop: "25vh",
            marginBottom: "10vh",
            fontSize: "50px"
        },
        visite: {
            width: props.version === "desktop" ? "400px" : "100%",
            marginBottom: "7vh",
        },
        info: {
        fontSize: "30px",
        },
        map: {
        width: "100%",
        height: "40vh",
        marginTop: "7vh",
        marginBottom: "10vh",

        objectFit: "cover",
        },
        p: {
            fontSize: "25px"
        },
    }
    return (
        <div style={styles.div}>
            <h3 style={styles.h3}>Kontakt</h3>
            <div style={styles.wrapper}>
                <img src={visite} alt="" style={styles.visite}/>
                <div style={styles.info}>
                    <h3 style={styles.info}>Mai-Phone Handyladen</h3>
                    <p style={styles.p}>0221 29897027</p>
                    <p style={styles.p}>Höninger Weg 204, <br/>
                        50969 Köln</p>
                </div>
            </div>
            <img src={map} alt="" style={styles.map}/>
        </div>
    )
}
