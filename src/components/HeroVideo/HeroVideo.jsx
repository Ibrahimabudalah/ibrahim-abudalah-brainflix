import React from "react";
import "./HeroVideo.scss";

function Video({ video }) {
  return (
    <section className="hero">
      <video poster={video} controls className="hero__video"></video>
    </section>
  );
}

export default Video;
