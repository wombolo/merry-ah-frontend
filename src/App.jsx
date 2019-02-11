
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/Routes'
import Menu from './components/Menu'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu/>
          <Routes/>
        </div>
      </Router>
    )
  }
}
