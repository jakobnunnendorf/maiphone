import React from 'react';
import Content from './Content/Content';


export default function SideBanner(props) {
    const styles = {
        banner_bg: {
            width: props.version === "desktop" ? "50%" : "100%",
            height: "100%",
            backgroundColor: "lightgray",
            opacity: 0.95,
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
        <div style={styles.banner_bg}>
            <Content/>
        </div>
    )
}
