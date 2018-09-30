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
      <div>
        <input
          type="text"
          placeholder="what you are looking for?"
          onChange={event => this.handleInputChange(event)}
          value={this.state.term}
        />
      </div>
    );
  }
}

export default SearchBar;
