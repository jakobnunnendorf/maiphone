// import React from 'react'

// export default function NavMenu() {
    const styles = {
        nav: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: "13vh",
            width: "100vw",
    
            position: "fixed",
    
            backgroundColor: "black",
            color: "#33bff0",
            zIndex: 1000
            },
        ul: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: "50vw",
    
            marginRight: "1vw",
    
            listStyle: "none",
            fontWeight: "bold",
            fontFamily: "Lato"
        },
        btn: {
            background: "none",
            color: "inherit",
            border: "none",
            padding: 0,
            font: "inherit",
            cursor: "pointer",
            outline: "inherit"
        },
        white: {
            color: "white"
        },
        em: {fontSize: "1em"}
    }
//     // const navList = props.siteControl.sites.map(
//     //     site => <li style={props.siteControl.activeSite === site ? styles.white : null} onClick={() => handleClick(site)}><button style={styles.btn}>{site}</button></li>
//     //     );
//   return (
//     <nav>
//             <ul>
//                 {/* {navList} */}
//             </ul>
//     </nav>
//   )
// }
