import React from 'react';
import Hamburger from 'hamburger-react';
import NavButton from "../NavButton/NavButton";
import { useState } from 'react';

export default function NavBurger(props) {
    const [menuIsOpen, toggleMenu] = useState(false);
    const [isOpen, setOpen] = useState(false);
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
      displayMenu();
      setOpen(isOpen => !isOpen);
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
      <span onClick={() => displayMenu()}><Hamburger rounded toggled={isOpen} toggle={setOpen}/></span>

      <nav style={styles.nav_wrapper}>
        <ul style={styles.ul}>
            {navList}
        </ul>
      </nav>
      
    </>
  )
}
