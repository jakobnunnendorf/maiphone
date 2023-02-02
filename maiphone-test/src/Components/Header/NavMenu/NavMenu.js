import React from 'react';
import NavButton from "../NavButton/NavButton";

export default function NavMenu(props) {
    const styles = {
        nav: {
            width: "50vw",
            height: "100%",
            marginRight: "1vw"
        },
        ul: {
            width: "100%",
            height: "100%",

            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',

            listStyle: "none",
            fontWeight: "bold",
        },
        inactive_btn: {
            background: "none",
            border: "none",
            font: "inherit",
            cursor: "pointer",
            outline: "inherit",
            color: "inherit"
        },
        active_btn: {
            color: "white",
            background: "none",
            border: "none",
            font: "inherit",
            cursor: "pointer",
            outline: "inherit",
        }
    }
    function handleClick(input){ // 1) Sets site active & 2) scrolls to component

        props.setActive(input);
        /* 1) calls the setActive function that was passed from App.js
        and thereby changes the App.js state variable activeSite to the input string*/

        let scroll_position; // empty container for scrollposition
        switch (input){ // based on string, decides which y-coordinate to set as target
            case "Start":
                scroll_position = 0;
            break;
            case "Reparaturen":
                scroll_position = window.innerHeight * props.layout.start / 100;
            break;
            case "Zubehör":
                scroll_position = window.innerHeight * (props.layout.start + props.layout.reparaturen) / 100;
            break;
            case "Kontakt":
                scroll_position = window.innerHeight * (props.layout.start + props.layout.reparaturen + props.layout.zubehör) / 100;
            break;
            default:
                scroll_position = 0;
            break;
        }
        window.scrollTo({ //scrolls to correct position
            top: scroll_position,
            behavior: "smooth"
        });
    }
    const navList = props.siteControl.sites.map(
        site => {
            return(
                <li onClick={() => handleClick(site)} key={site}>
                    <NavButton site={site} activeSite={props.siteControl.activeSite}/>
                </li>
            )
        }
    );
return (
<nav style={styles.nav}>
    <ul style={styles.ul}>
        {navList}
    </ul>
</nav>
)
}
