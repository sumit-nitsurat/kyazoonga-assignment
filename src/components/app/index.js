import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Header from '../header';
import Home from '../home';
import Footer from '../footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Home/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
