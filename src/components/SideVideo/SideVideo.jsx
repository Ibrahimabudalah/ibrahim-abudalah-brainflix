import React from "react";
import "./SideVideo.scss";

function SideVideo({video, eventHandler}) {
  console.log("SideVideo video", video);
  console.log("sidevideo eventHandler", eventHandler);
  const clickHandler = (e, id) => {
    eventHandler(id);
  };
  return (
    <div
      onClick={(e) => {
        clickHandler(e, video.id);
      }}
      id={video.id}
    >
      <img src={video.image} alt={video.title} />
      <h3>{video.title}</h3>
      <p>{video.channel}</p>
    </div>
  );
}

export default SideVideo;
