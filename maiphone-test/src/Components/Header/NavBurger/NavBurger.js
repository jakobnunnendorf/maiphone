import React from 'react';
import Hamburger from 'hamburger-react';
import NavButton from "../NavButton/NavButton";
import { useState } from 'react';

export default function NavBurger(props) {
    const [menuIsOpen, toggleMenu] = useState(false);
    const styles = {
        nav_wrapper: { // Mobile menu
            // position and size
            position: "fixed",
            width: "100%",
            height: `${100-props.layout.navbar}vh`,
            top: `${props.layout.navbar}vh`,
            transform: `translateX(${menuIsOpen ? "0%" : '100%'})`, // Slides in the menu
            transition: 'transform 0.3s ease-in-out',
            
            //styles
            backgroundColor: "black",
            opacity: 0.9,
            zIndex: 99999
        },
        ul: {
            position: "relative",
            top: "20vh",
            height: "60%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            textAlign: "center",
            listStyle: "none",
            fontWeight: "bold",
            zIndex: 99999
        }    }
    function displayMenu() {
        toggleMenu(!menuIsOpen);
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
    <>
      <span onClick={() => displayMenu()}><Hamburger rounded/></span>

      <nav style={styles.nav_wrapper}>
        <ul style={styles.ul}>
            {navList}
        </ul>
      </nav>
      
    </>
  )
}
