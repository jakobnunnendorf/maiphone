import React from 'react';
import BrandingBox from './BrandingBox/BrandingBox';
import NavMenu from './NavMenu/NavMenu';
import NavBurger from './NavBurger/NavBurger';

export default function Header(props) {
    const styles = {
        header: {
            // Position and size
            position: "fixed",
            height: "12vh",
            width: "100%",
            top: 0,
            
            // Inner structure
            display: "flex",
            justifyContent: "space-between", // drives nav and brand component apart
            alignItems: "center",
            
            // Styling
            color: "#33bff0", // The theme color blue
            backgroundColor: "black",
            fontFamily: "Lato, Arial",
            zIndex: 999999 //always on top
        },
    }
    
    return (
        <header style={styles.header}>

            <BrandingBox/> {/* Displays the logo and name on the top left */}

            {/* NavMenu for desktop and NavBurger for mobile */}
            {props.version === "desktop" ?
                <NavMenu
                    siteControl={props.siteControl}
                    layout={props.layout}
                    setActive={props.setActive}/>
                : <NavBurger
                siteControl={props.siteControl}
                layout={props.layout}
                setActive={props.setActive}/>}
                
        </header>
    )
}