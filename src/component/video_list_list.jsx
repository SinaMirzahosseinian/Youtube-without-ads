import React from "react";
import VideoListItem from "./video_list_item";
const VideoList = props => {
  const videoitems = props.videos.map(video => (
    <VideoListItem video={video} key={video.etag} />
  ));
  return (
    <div>
      <ul className="col-md-4 list-group" />
      {videoitems}
    </div>
  );
};

export default VideoList;
