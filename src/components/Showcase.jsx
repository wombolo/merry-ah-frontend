import React, { Component } from 'react';
import NavLink from 'react-router-dom/es/NavLink';

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
              <NavLink to={'/arts'}>
                <button
                type="button"
                className="showcase_button" >Explore</button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
