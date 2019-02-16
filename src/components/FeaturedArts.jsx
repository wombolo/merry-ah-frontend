import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeatureCard from './FeatureCard.jsx';
import Arrow from './FeatureArrow.jsx';
import { initSlide, nextSlide, previousSlide } from '../actions/featureActions';

/**
 * @param {class} component
 *  @returns {JSX} jsx
 */
class FeaturedArts extends Component {
  /**
   * @description handles state change
     * @returns {state} current state
     */
  componentDidMount() {
    this.props.initSlide();
    console.log('mount artList', this.props);
  }

  /**
   * @param {function} render
   *  @returns {JSX} jsx
   */
  render() {
    console.log('------------> ', this.props);
    return (
      <div>
      <div id="feature_list">
        <div id="featured_arts_header">
          <h5>Featured Arts</h5>
          <hr/>
        </div>
        {
          this.props.artList.activeList.map(
            (item, index) => <FeatureCard
              key={item.objectID}
              activeClass={
                index === 1 ? 'cards_active' : 'cards_inactive'}
              title={item.title} imgUrl={item.url} />,
          )
        }
        <div id="carousel_control">
          <Arrow
            className="slide-arrow"
            clickFunction={ this.props.previousSlide }
            direction="left"
            glyph="&#9664;" />
          <Arrow
            className="slide-arrow"
            clickFunction={ this.props.nextSlide }
            direction="right"
            glyph="&#9654;" />
        </div>
      </div>
      </div>
    );
  }
}

/**
 * @param {object} state
 *  @returns {object} object
 */
const mapStateToProps = state => ({ artList: state.featureReducer });

export default connect(
  mapStateToProps,
  { initSlide, nextSlide, previousSlide },
)(FeaturedArts);
