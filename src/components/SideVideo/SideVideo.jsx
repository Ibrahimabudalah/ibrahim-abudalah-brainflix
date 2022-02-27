import React from "react";
import './SideVideo.scss';


function SideVideos(props) {
  return (
    <div className="next">
      <h5>NEXT VIDEOS</h5>
      <img
        src={props.sideVideos[1].image}
        alt={props.sideVideos[1].title}
        className="video__image"
      />
      <div className="video__info">
        <h3 className="video__info__title">{props.sideVideos[1].title}</h3>
        <p className="video__info__channel">{props.sideVideos[1].channel}</p>
      </div>
    </div>
  );
}

export default SideVideos;
