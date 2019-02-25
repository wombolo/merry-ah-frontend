import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.css';
import Routes from './components/Routes.jsx';
import store from './store';
import Menu from './components/Menu.jsx';
import Footer from './components/Footer.jsx';
import setAuthToken from './utils/setAuthHeader';
import { setCurrentUser } from './actions/authActions';

if (localStorage.authToken) {
  setAuthToken(localStorage.authToken);
  const decoded = jwt_decode(localStorage.authToken);
  store.dispatch(setCurrentUser(decoded));
}
/**
 * App Component
 */
export default class App extends Component {
  /**
 * @param {object} render
 *  @returns {JSX} jsx
 */
  render() {
    return (
      <Router>
        <div>
          <Menu/>
          <Routes/>
          <Footer/>
        </div>
      </Router>
    );
  }
}
