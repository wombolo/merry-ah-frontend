import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * @param {function} event
 *  @returns {JSX} jsx
 */
export default class Showcase extends Component {
  /**
   * @param {function} event
   *  @returns {JSX} jsx
   */
  render() {
    return (
      <section id="showcase" className='mt-5 pt-5'>
        <div id="showcase_text">
          <div>
            <h1>Bring Unspoken <br></br> Words to Life</h1>
            <div>
              <Link to={'/arts'}>
                <button
                type="button"
                className="showcase_button" >Explore</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
