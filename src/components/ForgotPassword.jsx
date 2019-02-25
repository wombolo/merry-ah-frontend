import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { sendResetPasswordEmail } from '../actions/authActions';

/**
 * @param {function} event
 *  @returns {JSX} jsx
 */
export class ForgotPassword extends Component {
  state = {
    email: '',
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();

    const body = {
      email: this.state.email,
    };

    this.props.sendResetPasswordEmail(
      body,
      this.props.history,
    );
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
                <h2>Forgot Password</h2>
              </div>
              <div className="subtitle">
                <p>Enter your email, we will send a link to you</p>
              </div>
              <div className="form-container">
                <form method="post" onSubmit={this.onSubmit}>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    className="form-input"
                    onChange={this.onChange}
                    value={this.state.email}
                  />
                  <button
                    name="forgotPassword"
                    className="form-button"
                    disabled={this.props.auth.isLoading}
                  >
                    {this.props.auth.isLoading
                      ? 'Sending. . .' : 'Verify Email' }
                  </button>
                </form>
              </div>
            </div>
            <div className="clear"></div>
          </center>
        </section>
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  sendResetPasswordEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  auth: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
  }),
};

export const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps,
  { sendResetPasswordEmail })(withRouter(ForgotPassword));
