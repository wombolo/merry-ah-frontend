import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Comment from './Comment.jsx';
import { getSingleArt, deleteSingleArt } from '../actions/artsActions';
import { truncateString } from '../utils/truncateString';

/**
 *  @returns {JSX} jsx
 */
export class SingleArt extends Component {
  /**
   * @param {function} render
   *  @returns {JSX} jsx
   */
  componentDidMount() {
    const { slug } = this.props.match.params;
    this.props.getSingleArt(slug);
  }

  deleteArticle = (artSlug) => {
    if (confirm('Are you sure to delete?')) {
      this.props.deleteSingleArt(artSlug);
    }
  };

  /**
   * @param {function} render
   *  @returns {JSX} jsx
   */
  render() {
    const { isLoading, details } = this.props.art;
    let artistID = 0;

    if (this.props.auth.user.id) {
      artistID = this.props.auth.user.id;
    }

    return (
      <div>
        {isLoading ? false
          : <section id="single-art">
          <div className="single-art-banner"
            style={{
              backgroundImage: `url(${details.featuredImg})`,
            }}
          >
            <div className="art-details">
              <div className="label">{ details.Category.categoryName }</div>
              <div className="title">
                <h2>{ details.title }</h2>
                <h6>- { details.Author.username }</h6>
              </div>
              <div className="thumbnails">
                {
                  details.Media.map(image => (
                    <div key={image.id} className="thumbnail">
                      <img src={image.contentUrl} alt=""/>
                    </div>
                  ))
                }
                <div className="clear"></div>
              </div>
            </div>
          </div>
          <section id="single-art-content">
            <div className="art-left">
              <div className="art-reactions">
                <ul>
                  <li>
                    <span>254</span>
                    <i className="fa fa-heart"></i>
                  </li>
                  <li>
                    <span>63</span>
                    <i className="fa fa-comments"></i>
                  </li>
                  <li>
                    <span>Average Ratings</span>
                  </li>
                  <li>
                    <span>{details.visited} Views</span>
                  </li>
                  <li>
                      {artistID === details.artistId
                        ? <div className="dropdown show">
                          <a className="btn btn-secondary dropdown-toggle"
                             href="#" role="button" id="dropdownMenuLink"
                             data-toggle="dropdown" aria-haspopup="true"
                             aria-expanded="false">
                            Artist Actions
                          </a>

                          <div className="dropdown-menu"
                               aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#">
                              <i className='fa fa-pencil-square-o'/> Edit
                            </a>
                            <a className="dropdown-item" href="#"
                               onClick={() => this.deleteArticle(details.slug)}>
                              <i className='fa fa-trash-o'/> Delete
                            </a>
                          </div>
                        </div>
                        : ''}
                    </li>
                </ul>
              </div>
              <div className="videoPreview"></div>
              <div className="art-description">
                <p>
                  {details.description.replace(/<p>/g, '').replace(/<\/p>/g, '')}
                </p>
              </div>
              <div className="rate-section">
                <h6>Rate this Art</h6>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
              </div>
              <Comment id={details.id}/>
            </div>
             {/* end of comment */}
            <div className="art-right">
              <div>
                <h6>More by this Artist</h6>
              </div>
              <div className="art-right-cards">
                <div className="card-item">
                  <div className="item" style={
                    { backgroundImage: 'url("../assets/images/sculpture.jpg")' }
                    }>
                    <div className="card-props">
                      <p className="label card-label">Poetry</p>
                      <p className="card-date">29 Jan, 2019</p>
                    </div>
                  </div>
                  <div className="card-text">
                    <p>Los Tigres - Tigers of Azariah</p>
                  </div>
                </div>
                <div className="card-item">
                  <div className="item" style={
                    { backgroundImage: 'url("../assets/images/painting.jpg")' }
                    }>
                    <div className="card-props">
                      <p className="label card-label">Painting</p>
                      <p className="card-date">29 Jan, 2019</p>
                    </div>
                  </div>
                  <div className="card-text">
                    <p>Los Tigres - Tigers of Azariah</p>
                  </div>
                </div>
                <div className="card-item">
                  <div className="item" style={
                    {
                      backgroundImage:
                        'url("../assets/images/architecture.jpg")',
                    }
                    }>
                    <div className="card-props">
                      <p className="label card-label">Architecture</p>
                      <p className="card-date">29 Jan, 2019</p>
                    </div>
                  </div>
                  <div className="card-text">
                    <p>Los Tigres - Tigers of Azariah</p>
                  </div>
                </div>
                <div className="card-item">
                  <div className="item" style={
                    { backgroundImage: 'url("../assets/images/poetry.jpg")' }
                    }>
                    <div className="card-props">
                      <p className="label card-label">Sculpture</p>
                      <p className="card-date">29 Jan, 2019</p>
                    </div>
                  </div>
                  <div className="card-text">
                    <p>Los Tigres - Tigers of Azariah</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear"></div>
          </section>
        </section>
        }
      </div>
    );
  }
}

SingleArt.propTypes = {
  getSingleArt: PropTypes.func.isRequired,
  deleteSingleArt: PropTypes.func.isRequired,
  art: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    details: PropTypes.object,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
  auth: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

const mapStatesToProps = state => ({
  art: state.art,
  auth: state.auth,
});

export default connect(mapStatesToProps, {
  getSingleArt, deleteSingleArt,
})(SingleArt);
