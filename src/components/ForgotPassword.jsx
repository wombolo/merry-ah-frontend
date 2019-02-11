import React, { Component } from 'react'

export default class ForgotPassword extends Component {
  render() {
    return (
      <div>
        <section id="forgotPassword">
          {/* <center> */}
            <div className="forgot-password">
              <div className="title">
                <h2>Forgot Password</h2>
              </div>
              <hr className="titleHr" />
              <div className="subtitle">
                <p>Enter your email, we will send a link to you</p>
              </div>
              <div>
                <form action="" method="post">
                  <input type="text" name="email" placeholder="Email Address" className="form-input" />
                  <button name="forgotPassword" className="form-button">Verify Email</button>
                </form>
                <div className="alternative-links">
                  <a href="">Login</a> |&nbsp;
                  <a href="">Sign up</a>
                </div>
              </div>
            </div>
            <div className="clear"></div>
          {/* </center> */}
        </section>
      </div>
    )
  }
}
