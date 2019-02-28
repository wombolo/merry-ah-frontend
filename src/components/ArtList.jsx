import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import startCount from '../utils/startCount';
import counter from '../utils/counter';
import likeCount from '../assets/images/like.png';
import commentCount from '../assets/images/comment.png';
/**
 * ArtList Component
 */
/**
   * @param {function} render
   *  @returns {JSX} jsx
*/
const ArtList = ({ user }) => (
     <div className='p-2 m-3 col-12'>

      <div className="row container" id="art-list">
        <p className="profile-header col-12 mt-5">My Works</p>
        { !user.isGettingArts && user.userArts.map((art, i) => (
            <div key={i} className="col-md-3 col-sm-12">
              <div
                className="my-card"
                style={{
                  backgroundImage: `url(${art.featuredImg})`,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
              >
                <div className="card-category">{art.Category.categoryName}</div>
                <div className="card-container">
                  <div className="card-title">
                    <h6>
                      {' '}
                      <Link to={`/arts/${art.slug}`}> {art.title}</Link>{' '}
                    </h6>
                    <p>
                    {art.description.replace('<p>', '').replace('</p>', '')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="comments">
                  <p>
                    <img src={likeCount}
                    alt="" /> {counter(art.LikesCount)}{' '}
                  </p>
                  <p>
                    <img src={commentCount}
                    alt="" /> {counter(art.CommentsCount)}{' '}
                  </p>
                </div>
                <div className="ratings">
                {startCount(art.CalculatedRate)}
                </div>
              </div>
            </div>
        ))}
        </div>

        </div>
);

ArtList.propTypes = {
  user: PropTypes.shape({
    userArts: PropTypes.array,
    isGettingArts: PropTypes.bool.isRequired,
  }),
};
export default ArtList;
