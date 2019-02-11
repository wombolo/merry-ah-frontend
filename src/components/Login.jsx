import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions'
class Login extends Component {
    render() {
      return (
        <div>
          <h1>Login Page</h1>
        </div>
      )
    }
  }
const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps, { loginUser })(Login)