import React, { Component, Fragment } from "react";
import SearchBar from "./component/search_bar";
import YTsearch from "youtube-api-search";
import VideoList from "./component/video_list_list";
import Test from "./component/test";

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
        <Test />
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </Fragment>
    );
  }
}

export default App;
