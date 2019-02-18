
import React, { Component } from 'react';
import FeaturedArts from './FeaturedArts.jsx';
/**
 * Home Component
 */
export default class Home extends Component {
  /**
 * @param {function} render
 *  @returns {JSX} jsx
 */
  render() {
    return (
        <div>
          <FeaturedArts/>
        </div>
    );
  }
}
