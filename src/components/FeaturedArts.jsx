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
          url: '//placehold.it/400x600?text=1',
          title: 'Do you love art',
          category: 'painting',
        },
        {
          objectID: 2,
          url: '//placehold.it/400x400?text=2',
          title: 'Cirrhosis of the sky',
          category: 'freehand_sketch',
        },
        {
          objectID: 3,
          url: '//placehold.it/400x400?text=3',
          title: 'Walkers Short Bread',
          category: 'mosaic',
        },
        {
          objectID: 4,
          url: '//placehold.it/400x400?text=4',
          title: 'How to have a blast',
          category: 'mosaic',
        },
        {
          objectID: 5,
          url: '//placehold.it/400x400?text=5',
          title: 'Debugging best practices',
          category: 'mosaic',
        },
        {
          objectID: 6,
          url: '//placehold.it/400x400?text=6',
          title: 'Fast and furious remake',
          category: 'mosaic',
        },
        {
          objectID: 7,
          url: '//placehold.it/400x400?text=7',
          title: 'Best Coder alive',
          category: 'mosaic',
        },
        {
          objectID: 8,
          url: '//placehold.it/400x400?text=8',
          title: 'Fifa e-world cup',
          category: 'mosaic',
        },
        {
          objectID: 9,
          url: '//placehold.it/400x400?text=9',
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
        {
          this.state.activeList.map(
            (item, index) => <FeatureCard
              key={item.objectID}
              activeClass={
                index === 1 ? 'cards_active' : 'cards_inactive'}
              title={item.title} imgUrl={item.url} />,
          )
        }
      </div>
        <div id="carousel_control">
          <Arrow className="slide-arrow" clickFunction={ this.previousSlide } direction="left" glyph="&#9664;" />
          <Arrow className="slide-arrow" clickFunction={ this.nextSlide } direction="right" glyph="&#9654;" />
        </div>
      </div>
    );
  }
}
