import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';
import Logo from './Logo';

export default class Menu extends Component {
  render() {
    return (
      <nav id="nav" class="navbar navbar-expand-lg bg-light">
        <Logo/>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <Search/>
         <ul class="nav navbar-nav mr-auto col-lg-2 float-right offset-1">
            <li class="nav-item">
              <NavLink to="/login" >Login</NavLink>
            </li>
            <li class="nav-item offset-1">
              <NavLink to="/register" >Register</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
