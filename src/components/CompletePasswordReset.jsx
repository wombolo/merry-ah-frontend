import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completePasswordReset } from '../actions/authActions';

/**
 * Class Complete Reset Password
 */
class CompletePasswordReset extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      password: '',
      confirmPassword: ''
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
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    }

    this.props.completePasswordReset(body);
  }
  render() {
    return (
      <div>
        <section id="forgotPassword">
          <center>
            <div className="forgot-password">
              <div className="title">
                <h2>Complete password reset</h2>
              </div>
              <hr className="titleHr" />
              <div className="subtitle">
                <p>Enter a new password to log in back to Art Cave</p>
              </div>
              <div>
                <form method="post" onSubmit={this.onSubmit}>
                  <input
                  type="text"
                  name="password"
                  placeholder="New Password"
                  className="form-input"
                  onChange={this.onChange}
                  value={this.state.password} />
                  <input
                  type="text"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="form-input"
                  onChange={this.onChange}
                  value={this.state.confirmPassword} />
                  <button name="forgotPassword" className="form-button">
                    Proceed
                  </button>
                </form>
              </div>
            </div>
            <div className="clear"></div>
          </center>
        </section>
      </div>
    )
  }
}

export default connect(null, { completePasswordReset })(CompletePasswordReset);
