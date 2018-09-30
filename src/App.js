import React, { Component, Fragment } from "react";
import SearchBar from "./component/search_bar";
import YTsearch from "youtube-api-search";
const API_KEY = "AIzaSyAnPMlXfqjcbrcOiQ2dyQVTMuYL_hn5gCU";

class App extends Component {
  state = { videos: [] };

  componentDidMount() {
    YTsearch({ key: API_KEY, term: "ladygaga" }, videos =>
      this.setState({ videos })
    );
  }

  render() {
    return (
      <Fragment>
        <SearchBar />
      </Fragment>
    );
  }
}

export default App;
