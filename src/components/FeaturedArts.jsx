import React, { Component } from 'react';
import FeatureCard from './FeatureCard.jsx';
import Arrow from './FeatureArrow.jsx';

/**
 * @param {class} component
 *  @returns {JSX} jsx
 */
export default class FeaturedArts extends Component {
  /**
   * @constructor
   * @param {props} props
   */
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      artList: [
        {
          objectID: 1,
          url: '../assets/images/1.jpg',
          title: 'Do you love art',
          category: 'painting',
        },
        {
          objectID: 2,
          url: '../assets/images/2.jpg',
          title: 'Cirrhosis of the sky',
          category: 'freehand_sketch',
        },
        {
          objectID: 3,
          url: '../assets/images/3.jpg',
          title: 'Walkers Short Bread',
          category: 'mosaic',
        },
        {
          objectID: 4,
          url: '../assets/images/4.jpg',
          title: 'How to have a blast',
          category: 'mosaic',
        },
        {
          objectID: 5,
          url: '../assets/images/5.jpg',
          title: 'Debugging best practices',
          category: 'mosaic',
        },
        {
          objectID: 6,
          url: '../assets/images/6.jpg',
          title: 'Fast and furious remake',
          category: 'mosaic',
        },
        {
          objectID: 7,
          url: '../assets/images/7.jpg',
          title: 'Best Coder alive',
          category: 'mosaic',
        },
        {
          objectID: 8,
          url: '../assets/images/8.jpg',
          title: 'Fifa e-world cup',
          category: 'mosaic',
        },
        {
          objectID: 9,
          url: '../assets/images/9.jpg',
          title: 'Perfection at its peak',
          category: 'mosaic',
        },
      ],
      activeList: [],
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  /**
   * @description handles state change
     * @returns {state} current state
     */
  componentDidMount() {
    const {
      artList,
    } = this.state;
    console.log('artList', artList);
    const newlist = artList.slice(0, 3);
    this.setState({
      activeList: newlist,
    });
  }

  /**
   * @description handles state change
     * @returns {state} current state
     */
  nextSlide() {
    const {
      artList,
      activeList,
    } = this.state;
    console.log('activeList', activeList);
    const secondItem = activeList[1].objectID;
    console.log('secondItem', secondItem);

    /**
     * @params {object}
     * @returns {index}
     */
    const found = artList
      .findIndex(element => element.objectID === secondItem);
    console.log('found : ', found);

    const newlist = artList.slice(found, found + 3);
    
    console.log('newlist : ', newlist);
    this.setState({
      activeList: newlist,
    });
  }

  /**
   * @description handles state change
     * @returns {state} current state
     */
  previousSlide() {
    const {
      artList,
      activeList,
    } = this.state;
    console.log('activeList', activeList);
    const secondItem = activeList[1].objectID;
    console.log('secondItem', secondItem);

    /**
     * @params {object}
     * @returns {index}
     */
    const found = artList
      .findIndex(element => element.objectID === secondItem);
    console.log('found : ', found);

    console.log(found - 2, found + 1);
    const newlist = artList.slice(found - 2, found + 1);
    
    console.log('newlist : ', newlist);
    this.setState({
      activeList: newlist,
    });
  }

  /**
   * @param {function} render
   *  @returns {JSX} jsx
   */
  render() {
    return (
      <div>
      <div id="feature_list">
        <div id="featured_arts_header">
          <h5>Featured Arts</h5>
        </div>
        {
          this.state.activeList.map(
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
            clickFunction={ this.previousSlide }
            direction="left"
            glyph="&#9664;" />
          <Arrow
            className="slide-arrow" 
            clickFunction={ this.nextSlide } 
            direction="right" 
            glyph="&#9654;" />
        </div>
      </div>
      </div>
    );
  }
}
