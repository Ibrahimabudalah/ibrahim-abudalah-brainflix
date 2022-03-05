import React from "react";
import "./SideVideo.scss";

function SideVideo({ video, eventHandler }) {
  // console.log("SideVideo video", video);
  // console.log("sidevideo eventHandler", eventHandler);
  const clickHandler = (e, id) => {
    eventHandler(id);
  };
  // /video.id
  return (
    <div
      onClick={(e) => {
        clickHandler(e, video.id);
      }}
      id={video.id}
      className="videos"
    >
      <div className="videos__container">
        <img
          src={video.image}
          alt={video.title}
          className="videos__container__image"
        />

        <div className="videos__container__info">
          <h3 className="videos__container__info__title">{video.title}</h3>
          <p className="videos__container__info__channel">{video.channel}</p>
        </div>
      </div>
    </div>
  );
}

export default SideVideo;
