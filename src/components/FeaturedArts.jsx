import React, { Component } from 'react';
import FeatureCard from './FeatureCard';

export default class FeaturedArts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artList: [
          {objectID: 1, url:"//placehold.it/400x400?text=1", title: "PAINTING", category:"painting"},
          {objectID: 2, url:"//placehold.it/400x400?text=2", title: "FREEHAND SKETCH", category:"freehand_sketch"},
          {objectID: 3, url:"//placehold.it/400x400?text=3", title: "MOSAIC", category:"mosaic"},
        ],
  };
}
  render() {
    return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 offset-4 center-block">
          <div className="carousel slide" id="myCarousel">
            <div className="carousel-inner">
              { 
                this.state.artList.map(
                    item => <FeatureCard key={item.objectID} title={item.title} imgUrl={item.url}/> 
                )
              }
            </div>
            <a class="left carousel-control" href="#myCarousel" data-slide="prev"><i class="glyphicon glyphicon-chevron-left"></i></a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next"><i class="glyphicon glyphicon-chevron-right"></i></a>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
