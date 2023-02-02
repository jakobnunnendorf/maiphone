import React from 'react';
import logos from "./visiteH.png";
import IconBar from './IconBar';


export default function SideBanner(props) {
    const styles = {
        banner_bg: {
            top: "0",
            right: "0",
            width: "100%",
            height: `${props.layout.start}vh`,
            backgroundColor: "lightgray",
            opacity: 0.95,
            textAlign: "center",
            display: "flex",
            alignItems: "center",
        },
        h2: {
            fontSize: "50px",
            color: "black",
            opacity: 0.9,
        },
        contentBox: {
            height: "80%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
        },
        border: {
            border: "none",
        }
        }
    return (
        <article style={styles.banner_bg}>
            <div style={styles.contentBox}>
                <h2 style={styles.h2}>Ihr Handyladen <br /> in Zollstock</h2>
                <IconBar style={styles.border}/>
                <h3 style={styles.border}>Wir reparieren ihr Handy <br />schnell, zuverlässig und günstig.</h3>
                <img src={logos} alt="" style={styles.border}/>
            </div>
        </article>
    )
}
