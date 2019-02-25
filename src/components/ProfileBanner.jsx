import React from 'react';
import PropTypes from 'prop-types';
import avartar from '../assets/images/profile.jpg';

const ProfileBanner = ({ handleEditProfile, user }) => {
  if (user.userProfile && user.userProfile.id && user.userProfile.id) {
    return (
      <React.Fragment>
        <div className="profile-banner">
          <div id="profile-image">
            <div
            style={{
              width: '215px',
              height: '215px',
              borderRadius: '50%',
              position: 'relative',
              backgroundImage: `url(${avartar})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}
            >
            </div>
            <h2>{user.userProfile.profile.firstName}
              {user.userProfile.profile.lastName} </h2>
          </div>
          <button
          onClick={() => handleEditProfile(user.userProfile.id)}
          id="edit-button"
          className="btn btn-primary btn-lg"
          style={{ cursor: 'pointer' }}
          >
            Edit Profile
          </button>
        </div>
        <div id="aside">
          <div className="row">
            <div className="col-3 aside">
              {' '}
              <strong>12</strong>
              <i className="aside-text"> Artworks</i>{' '}
            </div>
            <div className="col-3 aside">
              {' '}
              <strong>253</strong>
              <i className="aside-text"> Followers</i>
            </div>
            <div className="col-3 aside">
              {' '}
              <strong>93</strong>
              <i className="aside-text"> Following</i>
            </div>
            <div className="col-2 aside">
              {' '}
              <strong>5</strong>
              <br />
              <i className="aside-text"> Sold</i>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  return (<h1>Loading ...</h1>);
};
ProfileBanner.propTypes = {
  user: PropTypes.object.isRequired,
  handleEditProfile: PropTypes.func.isRequired,
};
export default ProfileBanner;
