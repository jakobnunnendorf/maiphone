import React from 'react';
import bg_desktop from "./background.png";
import bg_mobile from "./bg-mobile.png"

export default function Background(props) {

    const bg_display = props.version === "mobile" ? bg_mobile : bg_desktop; // Asks whether to use full or cropped image
    // as background, dependingg on moible or desktop version
    
    const styles = {
        bg_desktop: {
            // position and size
            objectFit: "cover",
            width: "100%",
            height: "100%",
        },
        bg_mobile: {
            // position and size
            objectFit: "cover",
            width: "100%",
            height: "300px",
        }
        }

    return (
        <img
                src={bg_display}
                alt="Mai-Phone Handyladen Zollstock"
                style={ props.version === "mobile" ? styles.bg_mobile : styles.bg_desktop}/> // Styles depending on mobile or desktop
    )
}
