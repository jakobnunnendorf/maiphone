import React from 'react';
import "./navbar.css";
// import BrandingBox from './BrandingBox/BrandingBox';
// import NavMenu from './NavMenu/NavMenu';

export default function NavBar(props) {
    // function handleClick(input){
    //     props.setActive(input);
    //     let scroll_position;
    //     switch (input){
    //         case "Start":
    //             scroll_position = 0;
    //         break;
    //         case "Reparaturen":
    //             scroll_position = window.innerHeight * props.layout.start / 100;
    //         break;
    //         case "Zubehör":
    //             scroll_position = window.innerHeight * (props.layout.start + props.layout.reparaturen) / 100;
    //         break;
    //         case "Kontakt":
    //             scroll_position = window.innerHeight * (props.layout.start + props.layout.reparaturen + props.layout.zubehör) / 100;
    //         break;
    //         default:
    //             scroll_position = 0;
    //         break;
    //     }
    //     window.scrollTo({
    //         top: scroll_position,
    //         behavior: "smooth"
    //     });
    // }
    return (
        <header>
        {/* <BrandingBox />
        <NavMenu /> */}
        </header>
    )
}