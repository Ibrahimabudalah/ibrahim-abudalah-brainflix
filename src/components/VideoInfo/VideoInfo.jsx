import React from "react";
import "./VideoInfo.scss";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";

function VideoInfo(videos) {
  const videoDate = new Date(parseInt(videos.videos.selectedVideo.timestamp));
  console.log(videos);
  return (
    <div className="video">
      <h1 className="video__title">{videos.videos.selectedVideo.title}</h1>
      <div className="video__info">
        <div className="video__info__container">
          <p className="video__info__channel">
            By {videos.videos.selectedVideo.channel}
          </p>
          <div className="video__info__container__views">
            <img src={views} alt="views" />
            <p>{videos.videos.selectedVideo.views}</p>
          </div>
        </div>
        <div className="video__info__container--margin">
          <p>{videoDate.toLocaleDateString("en-US")}</p>
          <div className="video__info__container__likes">
            <img src={likes} alt="likes" />
            <p>{videos.videos.selectedVideo.likes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoInfo;
