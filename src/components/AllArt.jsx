import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAllArt } from '../actions/artActions';

/**
 * @param {function} render
 *  @returns {JSX} jsx
 */
export class AllArt extends Component {
  /**
   * @param {function} componentDidMount
   *  @returns {Object} fetchAllArt
   */
  componentDidMount() {
    this.props.fetchAllArt();
  }

  /**
   * @param {function} render
   *  @returns {JSX} jsx
   */
  render() {
    const artsResponse = this.props.allArts;
    const { arts, isLoading } = artsResponse;
    let gridItemId = 0;

    if (isLoading) {
      return (
        <div className="m-5 pt-md-5">
          Now Loading...
        </div>
      );
    }

    return (
      <div className="mt-5 pt-md-5">
        <h4 className='m-4 font-weight-bold'>All Arts</h4>
        <div className="grid-container">
          {arts.map((art) => {
            const { articles } = art;

            return articles.map((singleArt) => {
              gridItemId += 1;
              const style = {
                backgroundImage: `url(${singleArt.featuredImg})`,
                textAlign: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundBlendMode: 'overlay',
                backgroundColor: 'rgba(0,0,0,0.55)',
              };
              return (
                <div key={singleArt.id} className={`item${gridItemId}`}
                     style={style}>
                  <i className='fa fa-heart fav-icon text-light'/>
                  <a href={`arts/${singleArt.slug}`} className='art-title'>
                    {singleArt.title}
                  </a>
                </div>
              );
            });
          })}
        </div>
      </div>
    );
  }
}

AllArt.propTypes = {
  allArts: PropTypes.shape({}).isRequired,
  fetchAllArt: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  allArts: state.allArts,
});

export default connect(mapStateToProps, {
  fetchAllArt,
})(AllArt);
