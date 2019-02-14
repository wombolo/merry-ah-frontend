import React, { Component } from 'react';
import FeatureCard from './FeatureCard';
import FeatureButton from './FeatureButton';
import Arrow from './FeatureArrow';

export default class FeaturedArts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artList: [
          {objectID: 1, url:"//placehold.it/400x600?text=1", title: "PAINTING", category:"painting"},
          {objectID: 2, url:"//placehold.it/400x400?text=2", title: "FREEHAND SKETCH", category:"freehand_sketch"},
          {objectID: 3, url:"//placehold.it/400x400?text=3", title: "MOSAIC", category:"mosaic"},
        ],
      
  };
}
  render() {
    return (
        
        <div id="feature_list">
          { 
            this.state.artList.map(
                (item, index) => <FeatureCard key={item.objectID} activeClass={index === 1 ? "cards_active" : "cards_inactive"} title={item.title} imgUrl={item.url}/> 
            )
          }
          <div id="row">
          <Arrow className="slide-arrow" direction="left" glyph="&#9664;"/>
          <Arrow className="slide-arrow" direction="right" glyph="&#9654;"/>
        </div>
        </div>
    )
  }
}
