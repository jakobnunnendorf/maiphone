import React from 'react';
import repair from "./repair-icon.png";
import accessories from "./accessories.png";
import simcard from "./simcard.png";

export default function IconBar() {
    const styles = {
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
  )
}
