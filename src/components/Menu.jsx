import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Search from './Search.jsx';
import Logo from './Logo.jsx';
import notify from '../assets/images/notify.png';

/**
 * Menu Component
 * @param {func} auth
 * @returns {JSX} JSX
 */
export class Menu extends Component {
  handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  }

  headerLinks = (auth) => {
    let links;
    if (!auth.isAuthenticated) {
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
            <NavLink to="/notify" ><img src={notify} alt="" /></NavLink>
          </li>
          <li className="nav-item offset-md-5">
            <NavLink to="/profile"
              id="nav-link">{auth.user.username.split(' ')[0]}</NavLink>
          </li>
          <li className="nav-item offset-md-1">
            <div className="dropdown">

              <a data-target="#" href="page.html"
                data-toggle="dropdown" className="dropdown-toggle">
                <b className="caret"></b>
              </a>
              <ul className="dropdown-menu">
                <li className='logout'><a href="#"
                onClick={this.handleLogout}>Logout</a></li>

              </ul>
            </div>
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
      <nav id="nav"
      className="navbar navbar-expand-lg bg-light w-100 my-nav-style">
        <Logo />
        <button
          className="navbar-toggler pull-right"
          type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span
            className="navbar-toggler-icon">
            <i className="fa fa-bars"> </i></span>
        </button>
        <div id="search">
          <div className="
          collapse navbar-collapse" id="navbarSupportedContent">
            <Search />
          </div>
          </div>
        <ul className="navbar-nav mr-auto">
            {this.headerLinks(this.props.auth)}
        </ul>
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
