import React, { Component } from 'react';

export default class FeatureButton extends Component {
  render() {
    const { text
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
    )
  }
}
