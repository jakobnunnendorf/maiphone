import React from 'react';
import "./impressum.css";
import Pdf from './datenschutz.pdf';


export default function Impressum(props) {
  const styles = {
    div: {
        width: "100%",
        height: `${props.height}vh`,

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "black",
        color: "rgba(255,255,255,0.3)",
    },
    row: {
        display: "flex",
    }
}
return (
    <div style={styles.div}>
        <h3>Impressum</h3>
        <span style={styles.row}>
        <p>
        Maiphone GmbH | Höningerweg 204 | 50969 Köln | Telefon: +4922129897027 | E-Mail: kunde@mai-phone.de | Website: html://www.mai-phone.de</p>
        </span>
        <span>
        <p>
        Registergericht: Köln |
        USt.-ID-Nr.: 219/5036/4707
        </p>
        <p>
        Vertretungsberechtigter Geschäftsführer: H. Bozkurt |
        Gewerbeanmeldung nach §14 oder §55c der Gewerbeordnung 
        </p>
        </span>
        <p>Hier finden Sie die Datenschutzerklärung im Überblick</p>
        <a href = {Pdf} target = "_blank" rel="noreferrer" style={{color: "inherit"}}>Als PDF herunterladen</a>
    </div>
)
}
