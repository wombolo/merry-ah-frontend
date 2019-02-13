import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
          categoryList: [
              {objectID: 1, url:"../assets/images/painting.jpg", title: "PAINTING", category:"painting"},
              {objectID: 2, url:"../assets/images/sketch.jpg", title: "FREEHAND SKETCH", category:"freehand_sketch"},
              {objectID: 3, url:"../assets/images/mosaic.jpg", title: "MOSAIC", category:"mosaic"},
              {objectID: 4, url:"../assets/images/welcome.jpeg", title: "SCULPTURE", category:"sculpture"},
              {objectID: 5, url:"../assets/images/architecture.jpg", title: "ARCHITECTURE", category:"architecture"},
              {objectID: 6, url:"../assets/images/poetry.jpg", title: "POETRY", category:"poetry"}
            ],
    };
}
    render() {
      return (
        <section id="categories">
            <div>
              { 
                this.state.categoryList.map(
                    item => <div id="category" className="image" 
                    key={item.objectID} 
                    style={
                        {background: `linear-gradient(rgba(0, 0, 0, 0.5), 
                            rgba(0, 0, 0, 0.5)), url(${item.url}) no-repeat center `,
                        backgroundSize: 'cover'}
                        }>
                <div className="overlay">
                    <span>
                        <div id = "category_link">
                            <Link  to={`/art/${item.category}`}>{item.title}</Link>
                        </div>
                    </span>
                </div> 
              </div>
                  )
              }
            </div>
        </section> 
        );
  }
}
