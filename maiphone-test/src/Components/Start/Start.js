import React from 'react';
import Background from './Background';
import SideBanner from './SideBanner/SideBanner';
import MobileBanner from './MobileBanner/MobileBanner';

export default function Start(props) {
    const styles = {
        component: {
            // position and size
            width: "100%",
            height: "fit-content",
        }
    }
    return (
        <section style={styles.component}>

        <Background version={props.version}/>

        {props.version === "desktop" ? <SideBanner
        layout={props.layout}/> : <MobileBanner layout={props.layout}/>}

        </section>
    )
}
