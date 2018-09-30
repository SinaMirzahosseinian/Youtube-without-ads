import React, { Component, Fragment } from "react";
import SearchBar from "./component/search_bar";
import YTsearch from "youtube-api-search";
import VideoList from "./component/video_list_list";
import Test from "./component/test";
import VideoDetail from "./component/video-detail";

const API_KEY = "AIzaSyAnPMlXfqjcbrcOiQ2dyQVTMuYL_hn5gCU";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    YTsearch({ key: API_KEY, term: "ladygaga" }, videos =>
      this.setState({ videos: videos, selectedVideo: videos[0] })
    );
  }

  render() {
    return (
      <Fragment>
        <Test />
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </Fragment>
    );
  }
}

export default App;
