import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
          <form className="form-inline my-2 my-lg-0 col-lg-7">
            <input type="search" placeholder="Search" aria-label="Search for"/>
          </form>
        )
      }
}

export default Search;