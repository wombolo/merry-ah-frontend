import React, { Component } from 'react';
import { connect } from 'react-redux';
/**
 * Profile Componenet
 */
class Profile extends Component {
  /**
 * @param {function} render
 *  @returns {jsx} jsx
 */
  render() {
    return (<h1>Profile</h1>);
  }
}


export const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Profile);
