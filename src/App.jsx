import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Routes from './components/Routes';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Showcase from './components/Showcase';
import Categories from './components/Categories';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu/>
          <Showcase/>
          <Categories/>
          <Routes/>
          <Footer/>
        </div>
      </Router>
    )
  }
}
