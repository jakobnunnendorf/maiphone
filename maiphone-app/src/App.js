import React from 'react';
import Header from "./Components/Header/Header";
import Reparaturen from './Components/Reparaturen/Reparaturen';
import Start from "./Components/Start/Start";
import Zubehör from './Components/Zubehör/Zubehör';
import Kontakt from './Components/Kontakt/Kontakt';
import Impressum from './Components/Impressum/Impressum';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      screenWidth: window.innerWidth,
      version: window.innerWidth < 480 ? "mobile" : (window.innerWidth < 768 ? "tablet" : "desktop"),
      //how many sub pages and which one is the currently active one
      siteControl: {
        sites: ["Start", "Reparaturen", "Zubehör", "Kontakt"],
        activeSite: "Start",
      },
      //stores the layout of the app
      layout: {
        navbar: 12,
        start: 80,
        reparaturen: 250,
        zubehör: 100,
        kontakt: 130,
        footer: 30
      },
    }
    this.setActive = this.setActive.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  setActive(input){ //This function is passed as prop to the navbar that sets the clicked page as currently active
    const site = input;
    this.setState({
      //how many sub pages and which one is the currently active one
      siteControl: {
        ...this.state.siteControl,
        activeSite: site,
      },
      //stores the layout of the app
      layout: {...this.state.layout}
    })
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      screenWidth: window.innerWidth,
      version: window.innerWidth < 900 ? "mobile" : (window.innerWidth < 768 ? "tablet" : "desktop"),
    });
  }
  handleScroll = () => {
    const scrollPos = window.scrollY;
    let activeSite;
    let start_end = window.innerHeight * this.state.layout.start / 100;
    let reparatur_end = window.innerHeight * (this.state.layout.start + this.state.layout.reparaturen) / 100;
    let zubehör_end = window.innerHeight * (this.state.layout.start + this.state.layout.reparaturen + this.state.layout.zubehör) / 100;
    
    if (scrollPos < start_end) {
      activeSite = "Start";
    } else if (scrollPos >= start_end && scrollPos < reparatur_end) {
      activeSite = "Reparaturen";
    } else if (scrollPos >= reparatur_end && scrollPos < zubehör_end) {
      activeSite = "Zubehör";
    } else {
      activeSite = "Kontakt";
    }
    this.setState({
      siteControl: {
        ...this.state.siteControl,
        activeSite: activeSite,
      },
    });
  }
  
  render() {
    return (
      <div>
      <Header
      siteControl={this.state.siteControl}
      layout={this.state.layout}
      setActive={this.setActive}
      version={this.state.version}
      />
      <main style={{position: "relative", top: `${this.state.layout.navbar}vh`}}>
      <Start
        layout={this.state.layout}
        version={this.state.version}
      />
      <Reparaturen layout={this.state.layout} version={this.state.version}/>
      <Zubehör height={this.state.layout.zubehör}/>
      <Kontakt height={this.state.layout.kontakt} version={this.state.version}/>
      </main>
      <footer style={{position: "relative", top: `${this.state.layout.navbar}vh`}}>
        <Impressum height={this.state.layout.footer}/>
      </footer>
      </div>
    )
  }
}

export default App;

