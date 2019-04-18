import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header'
import Featured from './components/feature'
import VenueInfor from './components/venueNfo/index'
class App extends Component {
  render() {
    return (
      <div className="App" style ={{height:"15000px", background:"cornflowerblue"}}>
        <Header/>
        <Featured/>
        <VenueInfor/>
      </div>
    );
  }
}

export default App;
