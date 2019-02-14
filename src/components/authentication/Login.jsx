import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../actions/authActions';

/**
 * @param {function} event
 *  @returns {JSX} jsx
 */
export class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData, this.props.history);
    this.setState({ [event.target.name]: '' });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  /**
 * @param {function} render
 *  @returns {JSX} jsx
 */
  render() {
    return (
      <div id="page-background">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-12">&nbsp;</div>

          <div className="col-md-6 mt-4 col-sm-12 pb-5" id="auth-background">
            <div className="row">
              <ul
              className="nav nav-pills mb-3 w-100 text-center"
              id="pills-tab" role="tablist">
                <li className="nav-item col-sm-12 p-0">
                  <a
                  className="nav-link active"
                  id="pills-home-tab" data-toggle="pill"
                  href="#pills-login"
                  role="tab" aria-controls="pills-home"
                  aria-selected="true">Login</a>
                </li>
              </ul>
            </div>

            <div className="tab-content" id="pills-tabContent">
      <div
        className="tab-pane fade show active"
        id="pills-login"
        role="tabpanel"
        aria-labelledby="pills-profile-tab"
      >
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className="form-control input1"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="form-control input2"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>

          <div className="form-group">
            <button
            className="btn btn-primary w-100"
            disabled={this.props.auth.isLoading}>
              {this.props.auth.isLoading ? 'Loading...' : 'Proceed'}
            </button>
          </div>
        </form>
        <p className="social-text">Login with Social</p>
      </div>
      <div className="row">
                <div
                className="col-2 offset-3 text-center">
                <div className="auth-icons facebook-square">&nbsp;</div></div>
                <div className="col-2 text-center">
                <div className="auth-icons twitter-square">&nbsp;</div></div>
                <div className="col-2 text-center">
                <div className="auth-icons google-plus-square">
                &nbsp;</div></div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">&nbsp;</div>
        </div>
      </div>
    </div>
    );
  }
}
Login.propTypes = {
  auth: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
};
export const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
