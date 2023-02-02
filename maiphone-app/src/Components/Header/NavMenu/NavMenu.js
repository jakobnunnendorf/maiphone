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
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        const sectionRect = section.getBoundingClientRect();
        const offset = window.innerHeight * 0.12;
        window.scrollTo({
            top: window.pageYOffset + sectionRect.top - offset,
            behavior: "smooth"
        });
    }
    function handleClick(input){ // 1) Sets site active & 2) scrolls to component

        props.setActive(input);
        /* 1) calls the setActive function that was passed from App.js
        and thereby changes the App.js state variable activeSite to the input string*/
        scrollToSection(input);
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
