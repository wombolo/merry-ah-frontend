import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Search from './Search.jsx';
import Logo from './Logo.jsx';

/**
 * Menu Component
 * @param {func} isAuthenticated
 * @returns {JSX} JSX
 */
export class Menu extends Component {
handleLogout = () => {
  localStorage.clear();
  window.location.reload();
}

headerLinks = (isAuthenticated) => {
  let links;
  if (!isAuthenticated) {
    links = (
      <React.Fragment>
     <li className="nav-item offset-md-5">
      <NavLink to="/login" >Login</NavLink>
     </li>
     <li className="nav-item offset-md-5">
      <NavLink to="/register" >Register</NavLink>
     </li>
     </React.Fragment>);
  } else {
    links = (
      <React.Fragment>
      <li className="nav-item offset-md-5">
      <NavLink to="/notify" ><i className="fa fa-bell"></i></NavLink>
     </li>
        <li className="nav-item offset-md-5">
            <NavLink to="/login"
            onClick={this.handleLogout} id="nav-link">logout</NavLink>
        </li>
      </React.Fragment>);
  }
  return links;
}

/**
 * @param {function} render
 *  @returns {JSX} jsx
 */
render() {
  return (
      <nav id="nav" className="navbar navbar-expand-lg bg-light">
        <Logo/>
        <button
        className="navbar-toggler pull-right"
        type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
          <span
          className="navbar-toggler-icon"><i className="fa fa-bars"> </i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Search/>
          <ul className="navbar-nav mr-auto offset-1 offset-md-2">
             {this.headerLinks(this.props.auth.isAuthenticated)}
          </ul>
        </div>
      </nav>
  );
}
}
Menu.propTypes = {
  auth: PropTypes.object.isRequired,
};
export const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Menu);
