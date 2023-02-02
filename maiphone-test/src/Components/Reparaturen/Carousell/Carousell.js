import React, { Component } from 'react'
import ControlButttons from './ControlButtons';
import hamitRepair from "./hamit_repair.jpeg";
import iphone from "./iphone.png";
import samsung from "./samsung.png";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
//https://react-icons.github.io/react-icons/search?q=arrow

export default class Carousell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [hamitRepair, iphone, samsung],
            activeLink: hamitRepair,
            activeIndex: 0
        }
        this.setActive = this.setActive.bind(this);
        this.incrementIndex = this.incrementIndex.bind(this);
        this.decrementIndex = this.decrementIndex.bind(this);
    }
    styles = {
        component: {
            position: "relative",
            border: "3px solid gray",
            width: this.props.version === "desktop" ? "50%" : "100%",
            height: this.props.version === "desktop" ? "100%" : "300px",
        },
        img: {
            width: "100%",
            height: "100%",
            objectFit: "scale-down",
        },
        arrowBar: {
            width: "100%",
            height: "fit-content",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",

            display: "flex",
            justifyContent: "space-between",
        },
        arrows: {
            height: "40px",
            width: "20px",
            backgroundColor: "white",
            opacity: 0.4,
            cursor: "pointer"
        }
    };
    setActive(link,index) {
        this.setState({
            ...this.state,
            activeLink: link,
            activeIndex: index
        })
    };
    incrementIndex() {
        if (this.state.activeIndex < this.state.pictures.length - 1){
            this.setState({
                ...this.state,
                activeIndex: this.state.activeIndex + 1
            })
        } else{
            this.setState({
                ...this.state,
                activeIndex: 0
            })
        }
    }
    decrementIndex() {
        if (this.state.activeIndex > 0) {
            this.setState({
                ...this.state,
                activeIndex: this.state.activeIndex - 1,
            });
        } else {
            this.setState({
                ...this.state,
                activeIndex: this.state.pictures.length - 1,
            });
        }
    }      
    render() {
    return (
        <div style={this.styles.component}>
            <img src={this.state.pictures[this.state.activeIndex]} alt="" style={this.styles.img}/>
            <ControlButttons
            pictures={this.state.pictures}
            setActive={this.setActive}
            activeIndex={this.state.activeIndex}
            />
            <div style={this.styles.arrowBar}>
            <AiOutlineArrowLeft
            style={this.styles.arrows}
            onClick={this.decrementIndex}/>
            <AiOutlineArrowRight
            style={this.styles.arrows}
            onClick={this.incrementIndex}/>
            </div>
        </div>
    )
    }
}
