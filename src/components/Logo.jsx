import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Logo extends Component {
  render() {
    return (
        <NavLink className="navbar-brand col-lg-2 logo" to="/" id="brand-logo" >artCave</NavLink>
    )
  }
}
