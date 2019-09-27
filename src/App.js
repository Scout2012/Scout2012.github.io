import React from 'react';
import Content from './components/Content';
import Navigation from './components/Navigation';
import Profile from './components/Profile'
import Footer from './components/Footer'

import './App.css';

class App extends React.Component {
  state = {
    fragments: [
      {
        id: 1,
        title: 'About',
        color: '#f4faff'
      },
      {
        id: 2,
        title: 'Projects',
        color: '#b4d6d3'
      },
      {
        id: 3,
        title: 'Experience',
        color: '#f4faff'
      },
      {
        id: 4,
        title: 'Contact',
        color: '#b4d6d3'
      }
    ]
  }



  //lifecycle component
  //returns JSX
  render(){
    return (
      <div className="App">
        <Navigation endpoints={ this.state.fragments }/>
        <Profile/>
        <Content fragments={ this.state.fragments }/>
        <Footer/>
      </div>
    );
  }
}

export default App;
