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
        <div className="video__info__container">
          <p className="video__info__channel">By {props.videos.channel}</p>
          <div className="video__info__container__views">
            <img src={views} alt="views" />
            <p>{props.videos.views}</p>
          </div>
        </div>
        <div className="video__info__container--margin">
          <p>{videoDate.toLocaleDateString("en-US")}</p>
          <div className="video__info__container__likes">
            <img src={likes} alt="likes" />
            <p>{props.videos.likes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoInfo;
