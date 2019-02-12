import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <div className="float-left">
            <li><h5>© 2019 All Rights Reserved</h5></li>
          </div>
          <div className="float-right">
            <ul>
              <li><a href="#"><i className="fa fa-2x fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fa fa-2x fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-2x fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}
