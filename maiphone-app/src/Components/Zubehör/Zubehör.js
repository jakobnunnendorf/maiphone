import React from 'react';
import Carousell from './Carousell/Carousell';

export default function Zubehör(props) {
    const styles = {
        div: {
            width: "100%",
            height: `${props.height}vh`,

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "black",
            color: "#33bff0",
        },
        article: {
            width: "80%",
            height: "1000px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
        h3: {
            fontSize: "50px"
        },
        p: {
            
            marginTop: "20px",
            color: "white",
            width: "60%",
        },
        blue: {
            color: "#33bff0",
            fontWeight: "bold"
        }
    }
    return (
        <div style={styles.div}>
        <article style={styles.article} id="Zubehör">
            <h3 style={styles.h3}>Handy Zubehör</h3>
                <p style={styles.p}>Wir bieten Ihnen ein breites Sortiment an Handy Zubehör an.
                Von <span style={styles.blue}>Displayschutzfolien</span> über <span style={styles.blue}>Handyhüllen </span> 
                bis hin zu <span style={styles.blue}>Kabeln</span>, <span style={styles.blue}>Adaptern</span>, 
                <span style={styles.blue}> Powerbanks</span>, <span style={styles.blue}>Speichermeden</span> und <span style={styles.blue}>Kopfhörern</span>.
                 Auch <span style={styles.blue}>Handyverträge</span> und <span style={styles.blue}>Guthaben</span> gibt es bei uns, wir haben für jeden das passende Zubehör.</p>
            <Carousell/>
        </article>
        
        </div>
    )
}
