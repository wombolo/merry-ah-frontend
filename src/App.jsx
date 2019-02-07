import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Routes from './components/Routes'
import Menu from './components/Menu'

export default class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <Routes/>
      </div>
    )
  }
}
