import React from 'react';
import "../../../../../../reset.css"

export default function ProcessGraphic() {
    const styles = {
        component: {
            width: "100%",
            height: "100%",

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",

            listStyle: "none",
        },
        li: {
            position: "relative",
            zIndex: 100,
            border: "rgba(50,50,50,0.1) solid 2px",
            borderRadius: "35px 35px 35px 35px",
            width: "100%",
            height: "70px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "rgba(50,50,50,0.03)"
        },
        p: {
            width: "fit-content",
            height: "fit-content",
            margin: "auto",
            fontWeight: "bold"
        }
    }
  return (
      <ul style={styles.component}>
        <li style={styles.li}>
            <p style={styles.p}>1.</p><p style={styles.p}>Unverbindlich anfragen</p><p style={styles.p}></p>
        </li>
        <li style={styles.li}>
        <p style={styles.p}>2.</p><p style={styles.p}>Schnelles angebot</p><p style={styles.p}></p>
        </li>
        <li style={styles.li}>
        <p style={styles.p}>3.</p><p style={styles.p}>Professionelle Reparatur</p><p style={styles.p}></p>
        </li>
      </ul>
  )
}
