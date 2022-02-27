import React from "react";
import "./VideoInfo.scss";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";

function VideoInfo(props) {
  const videoDate = new Date(parseInt(props.videos.timestamp));
  return (
    <div className="video">
      <h1 className="video__title">{props.videos.title}</h1>
      <div className="video__info">
        <p>By {props.videos.channel}</p>
        <img src={views} alt="views" />
        <p>{props.videos.views}</p>
        <p>{videoDate.toLocaleDateString("en-US")}</p>
        <img src={likes} alt="likes" />
        <p>{props.videos.likes}</p>
      </div>
    </div>
  );
}

export default VideoInfo;
