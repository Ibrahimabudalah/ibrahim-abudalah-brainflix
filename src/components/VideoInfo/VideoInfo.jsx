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
          <h4 className="video__info__channel">
            By {videoInfo.videoInfo.channel}
          </h4>
          <p className="video__info__text">
            {videoDate.toLocaleDateString("en-US")}
          </p>
        </div>

          <div className="video__info__container">
            <div className="video__info__container__views">
              <img src={views} alt="views" className="video__info__icons" />
              <p className="video__info__text video__info__text--tablet">
                {videoInfo.videoInfo.views}
              </p>
            </div>
            <div className="video__info__container__likes">
              <img src={likes} alt="likes" className="video__info__icons" />
              <p className="video__info__text">{videoInfo.videoInfo.likes}</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default VideoInfo;
