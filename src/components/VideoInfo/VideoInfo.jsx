import React from "react";
import "./VideoInfo.scss";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";

function VideoInfo({ videoInfo }) {
  const videoDate = new Date(parseInt(videoInfo.timestamp));
  // console.log(videos);
  return (
    <div className="video">
      <h1 className="video__title">{videoInfo.title}</h1>
      <section className="video__info">
        <div className="video__info__component-one">
          <h4 className="video__channel">By {videoInfo.channel}</h4>
          <p className="video__info__text">
            {videoDate.toLocaleDateString("en-US")}
          </p>
        </div>

        <div className="video__info__component-two">
          <div className="video__info__component__views">
            <img src={views} alt="views" className="video__info__icons" />
            <p>{videoInfo.views}</p>
          </div>
          <div className="video__info__component__likes">
            <img src={likes} alt="likes" className="video__info__icons" />
            <p>{videoInfo.likes}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VideoInfo;
