import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <h5>Loding...</h5>;
  }

  const videoId = video.id.videoId;
  const url = `http://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-resposive embed-responsive-16by9">
        <iframe clasName="embed-responsive-item" src={url} />
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
