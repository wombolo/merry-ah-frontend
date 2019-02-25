import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserProfile, getUserArts } from '../actions/profileActions';
import SiderBar from './SideBar.jsx';
import ProfileBanner from './ProfileBanner.jsx';
import ArtList from './ArtList.jsx';
/**
 * Profile Componenet
 */
class Profile extends Component {
  /**
 * @param {function} componentDidMount
 *  @returns {jsx} jsx
 */
  componentDidMount() {
    this.props.getUserProfile(this.props.auth.user.id);
    this.props.getUserArts(this.props.auth.user.id);
  }

  /**
 * @param {number} profileId
 *  @returns {jsx} jsx
 */
  handleEditProfile = (profileId) => {
    console.log(profileId);
  }

  /**
 * @param {function} render
 *  @returns {jsx} jsx
 */
  render() {
    const { isGettingArts } = this.props.user;
    return (
      <React.Fragment>
      <ProfileBanner
      user={this.props.user}
      handleEditProfile={this.handleEditProfile}
      />
      <ArtList
      user={this.props.user}
      isGettingArts={isGettingArts}
       />
      <SiderBar />
      </React.Fragment>
    );
  }
}

Profile.propTypes = {
  auth: PropTypes.object.isRequired,
  user: PropTypes.object,
  getUserProfile: PropTypes.func.isRequired,
  getUserArts: PropTypes.func.isRequired,
};
export const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user,
});

export default connect(mapStateToProps,
  { getUserProfile, getUserArts })(Profile);
