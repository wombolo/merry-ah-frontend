import React, { Component } from 'react';

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
      text
    } = this.props;
    return (
      <button
          // type={type}
          // disabled={disabled}
          // onClick={onClick}
          className="feature_button"
        >
          {text}
      </button>
    );
  }
}
