import React from 'react';
import PropTypes from 'prop-types';

/**
 * ProfileEdit Component
 */

export const ProfileEdit = ({ user, handleEditProfile, handleChange }) => (
        <div className="p-2 m-3 col-12">
          <div className="row container" id="art-list">
            <p className="profile-header col-6 offset-3 text-center mt-5">
              Update Profile
            </p>
            <form className="col-md-8 offset-2" onSubmit={handleEditProfile}>
              <div className="form-group row">
                <label htmlFor="bio" className="col-sm-2 col-form-label">
                  Biography
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="bio"
                    placeholder="Bio"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-1" >
                    User Type
                  </legend>
                  <div className="col-sm-10">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="userType"
                        value="artist"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="userType"
                      >
                        Artist
                      </label>
                    </div>
                    <div className="form-check disabled">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="userType"
                        value="user"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="userType"
                      >
                        User
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div className="form-group row">
                <label htmlFor="image" className="col-sm-2 col-form-label">
                  Image
                </label>
                <div className="col-sm-10">
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    placeholder="Upload profile image"
                    onChange={handleChange}
                  />
                </div>
                </div>
                <div className="form-group row">
                <button
                disabled={user.isLoading}
                className="btn btn-primary col-sm-10 offset-2"
                type="submit">
                {!user.isLoading ? 'Proceed' : 'Updating' }
                </button>
                </div>
            </form>
          </div>
        </div>
);

ProfileEdit.propTypes = {
  user: PropTypes.shape({
    isLoading: PropTypes.bool,
  }),
  handleEditProfile: PropTypes.func,
  handleChange: PropTypes.func,
};
export default ProfileEdit;
