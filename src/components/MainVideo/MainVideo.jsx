import React from 'react'
import './MainVideo.scss';


function Video(props) {
  return (
    <section className='hero'>
      <video poster={props.videos.image} controls className='hero__video'></video>
    </section>
    )
}

export default Video
