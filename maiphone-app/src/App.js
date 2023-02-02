import React from 'react';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent'; // 
// import Reparaturen from './Components/Reparaturen/Reparaturen';
// import Start from './Components/Start/Start';
// import Zubehör from './Components/Zubehör/Zubehör';
// import Kontakt from './Components/Kontakt/Kontakt';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      //how many sub pages and which one is the currently active one
      siteControl: {
        sites: ["Start", "Reparaturen", "Zubehör", "Kontakt"],
        activeSite: "Start",
      },
      //stores the layout of the app
      layout: {
        navbar: 10,
        start: 80,
        reparaturen: 100,
        zubehör: 85,
        kontakt: 85,
        footer: 30
        },
    }
        
  this.setActive = this.setActive.bind(this);
  }
  setActive(site){ //This function is passed as prop to the navbar that sets the clicked page as currently active
    this.setState({
      sites: ["Start", "Reparaturen", "Zubehör", "Kontakt"],
      activeSite: site
    })
  }
  render() {
    return (
      <>
      <HeaderComponent/>     
      </>
    )
  }
}

export default App;



