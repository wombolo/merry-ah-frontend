import React, { Component } from 'react';

/**
 *  @returns {JSX} jsx
 */
export default class SingleArt extends Component {
  /**
   * @param {function} render
   *  @returns {JSX} jsx
   */
  render() {
    return (
      <div>
        <section id="single-art">
          <div className="single-art-banner">
            <div className="art-details">
              <div className="label">Mosaic</div>
              <div className="title">
                <h2>Cirrhosis of the sky</h2>
                <h6>- Akintunde Adebanjo</h6>
              </div>
              <div className="thumbnails">
                <div className="thumbnail">
                  <img src="../assets/images/painting.jpg" alt=""/>
                </div>
                <div className="thumbnail">
                  <img src="../assets/images/architecture.jpg" alt=""/>
                </div>
                <div className="thumbnail">
                  <img src="../assets/images/painting.jpg" alt=""/>
                </div>
              </div>
            </div>
          </div>
          <section id="single-art-content">
            <div className="art-left">
              <div className="art-reactions">
                <ul>
                  <li>
                    <span>254</span>
                    <i className="fa fa-heart"></i>
                  </li>
                  <li>
                    <span>63</span>
                    <i className="fa fa-comments"></i>
                  </li>
                  <li>
                    <span>Average Ratings</span>
                  </li>
                  <li>
                    <span>2306 Views</span>
                  </li>
                </ul>
              </div>
              <div className="videoPreview"></div>
              <div className="art-description">
                <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature
                from 45 BC, making it over 2000 years old. Richard McClintock,
                a Latin professor at Hampden-Sydney College in Virginia,
                looked up one of the more obscure Latin words, consectetur,
                from a Lorem Ipsum passage, and going through the cites of the
                word in classical literature, discovered the undoubtable source.
                Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of ethics,
                very popular during the Renaissance. The first line of Lorem Ipsum,
                "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                below for those interested. Sections 1.10.32 and 1.10.33 from "de
                Finibus Bonorum et Malorum" by Cicero are also reproduced in their
                exact original form, accompanied by English versions from the 1914
                translation by H. Rackham
                </p>
              </div>
              <div className="rate-section">
                <h6>Rate this Art</h6>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
                <span className="fa fa-star-o"></span>
              </div>
              <div className="comment-section">
                <h6>Add your comment</h6>
                <form action="">
                  <textarea name="" id="" placeholder="Type comment here. . ."></textarea>
                  <button className="comment-button">Comment</button>
                </form>
                <div className="comments">
                  <h6>Comments</h6>
                  <div className="single-comment">
                    <img src="" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="art-right">
              <div>
                <h6>More by this Artist</h6>
              </div>
              <div className="art-right-cards">
                <div className="card-item">
                  <div className="item" style={
                    {backgroundImage: `url('../assets/images/sculpture.jpg')`}
                    }>
                    <div className="card-props">
                      <p className="label card-label">Poetry</p>
                      <p className="card-date">29 Jan, 2019</p>
                    </div>
                  </div>
                  <div className="card-text">
                    <p>Los Tigres - Tigers of Azariah</p>
                  </div>
                </div>
                <div className="card-item">
                  <div className="item" style={
                    {backgroundImage: `url('../assets/images/painting.jpg')`}
                    }>
                    <div className="card-props">
                      <p className="label card-label">Painting</p>
                      <p className="card-date">29 Jan, 2019</p>
                    </div>
                  </div>
                  <div className="card-text">
                    <p>Los Tigres - Tigers of Azariah</p>
                  </div>
                </div>
                <div className="card-item">
                  <div className="item" style={
                    {backgroundImage: `url('../assets/images/architecture.jpg')`}
                    }>
                    <div className="card-props">
                      <p className="label card-label">Architecture</p>
                      <p className="card-date">29 Jan, 2019</p>
                    </div>
                  </div>
                  <div className="card-text">
                    <p>Los Tigres - Tigers of Azariah</p>
                  </div>
                </div>
                <div className="card-item">
                  <div className="item" style={
                    {backgroundImage: `url('../assets/images/poetry.jpg')`}
                    }>
                    <div className="card-props">
                      <p className="label card-label">Sculpture</p>
                      <p className="card-date">29 Jan, 2019</p>
                    </div>
                  </div>
                  <div className="card-text">
                    <p>Los Tigres - Tigers of Azariah</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear"></div>
          </section>
        </section>
      </div>
    )
  }
}
