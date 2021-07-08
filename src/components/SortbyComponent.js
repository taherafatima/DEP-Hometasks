import React, { Component } from "react";
import MovieCount from "./MovieCount";
import SortByMovies from "./SortByMovies";

export class SortbyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortbyreleaseDate: false,
      sortbyrating: true,
      
    };
    this.handleSortby = this.handleSortby.bind(this);
  }

  handleSortby(event) {
    if (event.target.value === 'release-date') {
      this.setState({
        sortbyreleaseDate: true,
        sortbyrating: false,
        
      });
    } else if (event.target.value === 'rating') {
      this.setState({
        sortbyreleaseDate: false,
        sortbyrating: true,
        
      });
    }
  }

  render() {
    return (
      <div className="sortby-component">
        <MovieCount />
        <SortByMovies
          clickHandler={this.handleSortby}
          currentState={this.state}
        />
      </div>
    );
  }
}

export default SortbyComponent;
