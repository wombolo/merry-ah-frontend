import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileImage from '../assets/images/profileImage.png';

const ProfileBanner = ({ user }) => {
  if (!user.userProfile || !user.userProfile.id) {
    return <h1>Loading Art works...</h1>;
  }
  return (
      <div className="col-md-12 p-0">
        <div className="profile-banner">
          <div id="profile-image">
            <div
              style={{
                width: '215px',
                height: '215px',
                left: '2em',
                borderRadius: '50%',
                position: 'absolute',
                backgroundImage: `url(${user.userProfile.profile.imgURL
                || profileImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
            >
              <h2
                style={{
                  margin: '2.5em 0px 0px 7em',
                }}
              >
                {user.userProfile.profile.firstName}
                {user.userProfile.profile.lastName}{' '}
              </h2>
            </div>
          </div>
          <Link to={'/profile/edit-profile'}>
            <button
              id="edit-button"
              className="btn btn-primary btn-lg"
              style={{ cursor: 'pointer' }}
            >
              Edit Profile
            </button>
          </Link>
        </div>

        <div className="row">
          <div className="col-md-8">&nbsp;</div>

          <div className="col-md-4">
            <div id="aside">
              <div className="row">
                <div className="col-3 aside">
                  {' '}
                  <strong>{!user.isGettingArts && user.userArts.length}</strong>
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
                <div className="col-3 aside">
                  {' '}
                  <strong>5</strong>
                  <br />
                  <i className="aside-text"> Sold</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

ProfileBanner.propTypes = {
  user: PropTypes.shape({
    isGettingArts: PropTypes.bool,
    userArts: PropTypes.array,
    userProfile: PropTypes.shape({
      profile: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        imgURL: PropTypes.string,
      }),
    }),
  }),
};
export default ProfileBanner;
