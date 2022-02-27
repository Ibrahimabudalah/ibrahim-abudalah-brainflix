import React from "react";
import "./SideVideo.scss";

function SideVideos(props) {
  return (
    <div className="videos">
      <h5 className="videos__heading">NEXT VIDEOS</h5>
      <div className="videos__container">
        <img
          src={props.sideVideos[1].image}
          alt={props.sideVideos[1].title}
          className="videos__container__image"
        />
        <div className="videos__container__info">
          <h3 className="videos__container__info__title">
            {props.sideVideos[1].title}
          </h3>
          <p className="videos__container__info__channel">
            {props.sideVideos[1].channel}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideVideos;
