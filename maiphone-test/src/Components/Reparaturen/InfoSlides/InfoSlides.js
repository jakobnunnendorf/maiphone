import React, { Component } from 'react';
import SideBanner from './SideBanner/SideBanner';
import Carousell from '../Carousell/Carousell';

export default class InfoSlides extends Component {
    render() {
        const styles= {
            component: {
                width: this.props.version === "desktop" ? "80%" : "100vw",
                height: "80vh",
                marginBottom: "15vh",

                display: "flex",
                flexDirection: this.props.version === "desktop" ? "row" : "column",

                backgroundColor: "white",
                borderRadius: "10px"
            },
        };
        return (
        <div style={styles.component}>
        <Carousell version={this.props.version}/>
        <SideBanner version={this.props.version}/>
        </div>
        )
    }
}
