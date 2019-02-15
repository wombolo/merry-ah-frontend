import React, { Component } from 'react';
import FeatureButton from './FeatureButton.jsx';

/**
 * @param {function} event
 *  @returns {JSX} jsx
 */
export default class FeatureCard extends Component {
  /**
     * @param {function} render
     *  @returns {JSX} jsx
     */
  render() {
    const {
      imgUrl,
      title,
      activeClass
    } = this.props;
    return (
      <div id="cards" className={activeClass} style={
        {
          background: `linear-gradient(rgba(0, 0, 0, 0.5), 
                        rgba(0, 0, 0, 0.5)), url(${imgUrl}) no-repeat center `,
          backgroundSize: 'cover',
        }
      }>
        <div id="feature_button_div">
          <h5>{title}</h5>
          <FeatureButton text="View" />
        </div>
      </div>
    )
  }
}
