import React, { Component } from "react";
import SearchButton from "./SearchButton";

export class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
      searchbyTitle: true,
      searchbyGenre: false,
      searchby: "title",
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchby = this.handleSearchby.bind(this);
  }

  handleSearch(event) {
    this.setState({
      movieName: event.target.value,
    });
  }

  handleSearchby(event) {
    if (event.target.value === "title") {
      this.setState({
        searchbyTitle: true,
        searchbyGenre: false,
        searchby: "title",
      });
    } else if (event.target.value === "genres") {
      this.setState({
        searchbyTitle: false,
        searchbyGenre: true,
        searchby: "genres",
      });
    }
  }

  render() {
    const { searchbyTitle } = this.state;
    const { searchbyGenre } = this.state;
    return (
      <div className="search-component">
        <div className="bg-image">
        <div className="search-content-inner">
        <div className="search-content">
          <div className="display-netflixtext">
            <b>netflix</b>roulette
          </div>
          <p className="display-findmovie">FIND YOUR MOVIE</p>
          <div className="search-bar-class">
            <div>
              <input
                className="search-bar search-bar-inline"
                type="text"
                placeholder="Type movie name or genres"
                onChange={this.handleSearch}
              />
            </div>
            <div className="search-button-inline">
              <SearchButton
                movieName={this.state.movieName}
                searchby={this.state.searchby}
              />
            </div>
          </div>
          <div className="search-by">
            <div className="display-searchby">SEARCH BY</div>
            <div className="searchby-buttons">
              <button
                className={`${
                  searchbyTitle ? "primary-button" : "secondary-button"
                } title-button`}
                value="title"
                onClick={this.handleSearchby}
              >
                TITLE
              </button>
              <button
                className={`${
                  searchbyGenre ? "primary-button" : "secondary-button"
                }`}
                value="genres"
                onClick={this.handleSearchby}
              >
                GENRES
              </button>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </div>
    );
  }
}

export default SearchComponent;
