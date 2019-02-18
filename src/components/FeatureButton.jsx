import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @param {function} event
 *  @returns {JSX} jsx
 */
export default class FeatureButton extends Component {
  /**
     * @param {function} render
     *  @returns {JSX} jsx
     */
  render() {
    const {
      text,
      myclass,
    } = this.props;
    return (
      <button
          className={myclass}
        >
          {text}
      </button>
    );
  }
}

FeatureButton.propTypes = {
  text: PropTypes.string.isRequired,
  myclass: PropTypes.string.isRequired,
};
