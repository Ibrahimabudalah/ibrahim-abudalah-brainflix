import React from "react";
import "./VideoInfo.scss";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";

function VideoInfo(videoInfo) {
  const videoDate = new Date(parseInt(videoInfo.videoInfo.timestamp));
  // console.log(videos);
  return (
    <div className="video">
      <h1 className="video__title">{videoInfo.videoInfo.title}</h1>
      <div className="video__info">
        <div className="video__info__container">
          <p className="video__info__channel">
            By {videoInfo.videoInfo.channel}
          </p>
          <div className="video__info__container__views">
            <img src={views} alt="views" />
            <p>{videoInfo.videoInfo.views}</p>
          </div>
        </div>
        <div className="video__info__container--margin">
          <p>{videoDate.toLocaleDateString("en-US")}</p>
          <div className="video__info__container__likes">
            <img src={likes} alt="likes" />
            <p>{videoInfo.videoInfo.likes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoInfo;
