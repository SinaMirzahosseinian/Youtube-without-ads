import React, { Component } from "react";
import YTsearch from "youtube-api-search";

const API_KEY = "AIzaSyAnPMlXfqjcbrcOiQ2dyQVTMuYL_hn5gCU";

class SearchBar extends Component {
  state = { term: "" };

  handleInputChange = event => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div className="search-bar container">
        <input
          type="text"
          placeholder="What are you looking for?"
          onChange={event => this.handleInputChange(event)}
          value={this.state.term}
        />
      </div>
    );
  }
}

export default SearchBar;
