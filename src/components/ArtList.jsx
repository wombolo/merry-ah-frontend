import React from 'react';
import PropTypes from 'prop-types';
import card1 from '../assets/images/card1.jpeg';
import startCount from '../utils/startCount';
import counter from '../utils/counter';
import like from '../assets/images/like.png';
import comment from '../assets/images/comment.png';
/**
 * ArtList Component
 */
/**
   * @param {function} render
   *  @returns {JSX} jsx
   */
const ArtList = ({ user, isGettingArts }) => (
      <div className="row" id="art-list">
        <p className="profile-header col-12">My Works</p>
        { !isGettingArts && user.userArts.map((art, i) => (
            <div key={i} className="col-3">
              <div
                className="my-card"
                style={{
                  backgroundImage: `url(${card1})`,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
              >
                <div className="card-category">{art.Category.categoryName}</div>
                <div className="card-container">
                  <div className="card-title">
                    <h6>
                      {' '}
                      <a href=""> {art.title}</a>{' '}
                    </h6>
                    <p>
                    {art.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="comments">
                  <p>
                    <img src={like} alt="" /> {counter(art.LikesCount)}{' '}
                  </p>
                  <p>
                    <img src={comment} alt="" /> {counter(art.CommentsCount)}{' '}
                  </p>
                </div>
                <div className="ratings">
                {startCount(art.CalculatedRate)}
                </div>
              </div>
            </div>
        ))}
        </div>
);

ArtList.propTypes = {
  user: PropTypes.object.isRequired,
  isGettingArts: PropTypes.bool.isRequired,
};
export default ArtList;
