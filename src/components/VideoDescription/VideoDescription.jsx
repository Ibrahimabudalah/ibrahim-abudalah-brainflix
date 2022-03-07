import React from "react";
import "./VideoDescription.scss";

function VideoDescription({ video }) {
  return (
    <div className="description">
      <p className="description__text">{video.description}</p>
    </div>
  );
}

export default VideoDescription;
