import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import ProfileEdit from './ProfileEdit.jsx';
import {
  getUserProfile,
  getUserArts,
  editProfile,
} from '../actions/profileActions';
import SiderBar from './SideBar.jsx';
import ProfileBanner from './ProfileBanner.jsx';
import ArtList from './ArtList.jsx';
/**
 * Profile Componenet
 */
export class Profile extends Component {
  state = {
    bio: '',
    image: '',
    userType: '',
  };

  /**
 * @param {function} componentDidMount
 *  @returns {jsx} jsx
 */
  componentDidMount() {
    this.props.getUserProfile(this.props.auth.user.id);
    this.props.getUserArts(this.props.auth.user.id);
  }

  /**
   *  @param {number} event
 *  @returns {jsx} jsx
 */
  handleEditProfile = (event) => {
    const {
      bio,
      imgURL,
    } = this.props.user.userProfile.profile;
    const {
      userType,
    } = this.props.user.userProfile;
    event.preventDefault();
    const payload = {
      userType: this.state.userType || userType,
      bio: this.state.bio || bio,
      imgURL: this.state.image || imgURL,
    };
    this.props.editProfile(payload);
  }

  /**
 * @param {number} event
 *  @returns {jsx} jsx
 */
  handleChange = (event) => {
    if (event.target.id === 'image') {
      this.setState({
        image: event.target.files[0],
      });
    } else {
      this.setState({
        [event.target.id]: event.target.value,
      });
    }
  }

  /**
   * @param {function} render
   *  @returns {jsx} jsx
   */
  render() {
    const { isGettingArts } = this.props.user;
    return (

      <div className='row'>

        <div className='col-md-2 p-0'>
          <SiderBar />
        </div>

        <div className='col-md-10 p-0'>
          <ProfileBanner
            user={this.props.user}
          />
          <Switch>
            <Route
              path='/profile/edit-profile'
              render={props => (
                <ProfileEdit
                  user={this.props.user}
                  handleEditProfile={this.handleEditProfile}
                  handleChange={this.handleChange}
                  {...props}
                />
              )}
            />
            <Route
              exact
              path='/profile'
              render={state => (
                <ArtList
                  user={this.props.user}
                  isGettingArts={isGettingArts}
                  {...state}
                />
              )}
            />
          </Switch>
        </div>

      </div>
    );
  }
}

Profile.propTypes = {
  auth: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }),
  user: PropTypes.shape({
    isGettingArts: PropTypes.bool,
    userProfile: PropTypes.shape({
      userType: PropTypes.string,
      profile: PropTypes.shape({
        bio: PropTypes.string,
        imgURL: PropTypes.string,
      }),
    }),
  }),
  getUserProfile: PropTypes.func.isRequired,
  editProfile: PropTypes.func.isRequired,
  getUserArts: PropTypes.func.isRequired,
};
export const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user,
});

export default connect(mapStateToProps,
  { getUserProfile, getUserArts, editProfile })(Profile);
