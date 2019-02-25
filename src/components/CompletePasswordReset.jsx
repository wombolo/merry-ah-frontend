import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { completePasswordReset } from '../actions/authActions';
import Notify from '../utils/Notify';
import getQueryStrings from '../utils/getQueryStrings';

/**
 * @param {function} event
 *  @returns {JSX} jsx
 */
export class CompletePasswordReset extends Component {
  state = {
    password: '',
    confirmPassword: '',
    token: '',
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();

    const body = {
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };

    this.props.completePasswordReset(
      body,
      this.state.token,
      this.props.history,
    );
  }

  checkToken = () => {
    const strings = getQueryStrings(window.location.href);
    const { token } = strings;
    if (!token) {
      Notify.notifyError('This link is invalid or broken');
      this.props.history.push('/login');
      return false;
    }
    this.setState({ token });
  }

  /**
 * @param {function} event
 *  @returns {null} null
 */
  componentDidMount() {
    this.checkToken();
  }

  /**
   * @param {function} render
   *  @returns {JSX} jsx
   */
  render() {
    return (
      <div>
        <section id="forgotPassword">
          <center>
            <div className="forgot-password">
              <div className="title">
                <h2>Complete password reset</h2>
              </div>
              <div className="form-container">
                <form method="post" onSubmit={this.onSubmit}>
                  <input
                    type="password"
                    name="password"
                    placeholder="New Password"
                    className="form-input test-input1"
                    onChange={this.onChange}
                    value={this.state.password}
                    required
                  />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="form-input test-input2"
                    onChange={this.onChange}
                    value={this.state.confirmPassword}
                  />
                  <button name="forgotPassword" className="form-button">
                    Proceed
                  </button>
                </form>
              </div>
            </div>
          </center>
        </section>
      </div>
    );
  }
}

CompletePasswordReset.propTypes = {
  completePasswordReset: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default connect(null,
  { completePasswordReset })(withRouter(CompletePasswordReset));
