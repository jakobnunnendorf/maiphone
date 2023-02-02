import React, { Component } from 'react'
import ControlButttons from './ControlButtons';

import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
//https://react-icons.github.io/react-icons/search?q=arrow

//import pictures
import image1 from "./media/image1.jpg";
import image2 from "./media/image2.jpg";
import image3 from "./media/image3.jpg";
import image4 from "./media/image4.jpg";
import image5 from "./media/image5.jpg";
import image6 from "./media/image6.jpg";
import image7 from "./media/image7.jpg";
import image8 from "./media/image8.jpg";
import image9 from "./media/image9.jpg";
import image10 from "./media/image10.jpg";
import image11 from "./media/image11.jpg";
import image12 from "./media/image12.jpg";
import image13 from "./media/image13.jpg";
import image14 from "./media/image14.jpg";
import image15 from "./media/image15.jpg";
import image16 from "./media/image16.jpg";
import image17 from "./media/image17.jpg";
import image18 from "./media/image18.jpg";
import image19 from "./media/image19.jpg";
import image20 from "./media/image20.jpg";
import image21 from "./media/image21.jpg";
import image22 from "./media/image22.jpg";
import image23 from "./media/image23.jpg";
import image24 from "./media/image24.jpg";
import image25 from "./media/image25.jpg";
import image26 from "./media/image26.jpg";
import image27 from "./media/image27.jpg";
import image28 from "./media/image28.jpg";
import image29 from "./media/image29.jpg";
import image30 from "./media/image30.jpg";
import image31 from "./media/image31.jpg";
import image32 from "./media/image32.jpg";
import image33 from "./media/image33.jpg";
import image34 from "./media/image34.jpg";
import image35 from "./media/image35.jpg";
import image36 from "./media/image36.jpg";
import image37 from "./media/image37.jpg";
import image38 from "./media/image38.jpg";
import image39 from "./media/image39.jpg";
import image40 from "./media/image40.jpg";
import image41 from "./media/image41.jpg";
import image42 from "./media/image42.jpg";
import image43 from "./media/image43.jpg";
import image44 from "./media/image44.jpg";
import image45 from "./media/image45.jpg";
import image46 from "./media/image46.jpg";
import image47 from "./media/image47.jpg";
import image48 from "./media/image48.jpg";
import image49 from "./media/image49.jpg";
import image50 from "./media/image50.jpg";
import image51 from "./media/image51.jpg";

export default class Carousell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27, image28, image29, image30, image31, image32, image33, image34, image35, image36, image37, image38, image39, image40, image41, image42, image43, image44, image45, image46, image47, image48, image49, image50, image51],
            activeLink: image1,
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
            width: "fit-content",
            maxWidth: "90%",
            height: this.props.height,
            marginTop: "30px"
        },
        img: {            
            width: "fit-content",
            height: "500px",
            maxWidth: "100%",
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
    componentDidMount(){
        setInterval(()=>this.incrementIndex(), 4000);
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


