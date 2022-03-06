import React from "react";
import { Link } from "react-router-dom";
import "./SideVideo.scss";

function SideVideo({ video }) {
  // console.log("SideVideo video", video);
  // console.log("sidevideo eventHandler", eventHandler);
  // const clickHandler = (e, id) => {
  //   eventHandler(id);
  // };
  // /video.id
  return (
    // <div
    //   onClick={() => {
    //     selectedVideo(key);
    //   }}
    //   // id={video.id}
    //   // className="videos"
    // >
    <Link to={`/videos/${video.id}`}>
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
    </Link>
  );
}

export default SideVideo;
