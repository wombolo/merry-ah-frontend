import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendResetPasswordEmail } from '../actions/authActions';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const body = {
      email: this.state.email
    }

    this.props.sendResetPasswordEmail(body);
  }
  render() {
    return (
      <div>
        <section id="forgotPassword">
          <center>
            <div className="forgot-password">
              <div className="title">
                <h2>Forgot Password</h2>
              </div>
              <hr className="titleHr" />
              <div className="subtitle">
                <p>Enter your email, we will send a link to you</p>
              </div>
              <div>
                <form method="post" onSubmit={this.onSubmit}>
                  <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  className="form-input"
                  onChange={this.onChange}
                  value={this.state.email} />
                  <button name="forgotPassword" className="form-button">
                    Verify Email
                  </button>
                </form>
                <div className="alternative-links">
                  <a href="">Login</a> |&nbsp;
                  <a href="">Sign up</a>
                </div>
              </div>
            </div>
            <div className="clear"></div>
          </center>
        </section>
      </div>
    )
  }
}

export default connect(null, { sendResetPasswordEmail })(ForgotPassword);
