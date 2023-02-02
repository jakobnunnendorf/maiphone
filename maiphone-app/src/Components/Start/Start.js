import React from 'react';
import background from "./background.png";
import logos from "./visiteH.png";
import repair from "./repair-icon.png";
import accessories from "./accessories.png";
import simcard from "./simcard.png";

export default function Start(props) {
    const styles = {
        div: {
            width: "100%",
            height: `${props.height}vh`,
            position: "relative",
            backgroundColor: "white"
        },
        img_bg: {
            width: "100%",
            height: "100%"
        },
        img: {
            position: "absolute",
            
            bottom: 0
        },
        banner_bg: {
            position: "absolute",
            top: "0",
            right: "0",
            width: "35vw",
            height: `${props.height}vh`,
            backgroundColor: "lightgray",
            opacity: 0.95,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        banner: {
            fontSize: "50px",
            color: "black",
            opacity: 0.9,
        },
        icon_bar: {
            display: "flex",
            justifyContent: "space-around",
            width: "80%",
            height: "20%",
            marginTop: "3vh"
        },
        icon_wrapper: {
            height: "100%",
            fontFamily: "Lato",
            fontWeight: "bold",
        },
        icons: {
            height: "60%",
        }
        }
    return (
        <>
            <div
            style={styles.div}>

            <img
            src={background}
            alt=""
            style={styles.img_bg}/>
            <div style={styles.banner_bg}>
                <h2 style={styles.banner}>Ihr Handyladen <br /> in Zollstock</h2>
                <div style={styles.icon_bar}>
                    <span style={styles.icon_wrapper}>
                        <img src={repair} alt="" style={styles.icons}/>
                        <p>Reparaturen</p>
                    </span>
                    <span style={styles.icon_wrapper}>
                        <img src={accessories} alt="" style={styles.icons}/>
                        <p>Hüllen</p>
                    </span>
                    <span style={styles.icon_wrapper}>
                        <img src={simcard} alt="" style={styles.icons}/>
                        <p>Mobilfunk</p>
                    </span>
                </div>
                <h3>Wir reparieren ihr Handy <br />schnell, zuverlässig und günstig.</h3>

                <img src={logos} alt="" style={styles.img} />
            </div>
            </div>
        </>
    )
}
