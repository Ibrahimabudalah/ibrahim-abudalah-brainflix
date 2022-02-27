import React from 'react'
import './MainVideo.scss';


function Video(props) {
  return (
    <section className='hero'>
      <video poster={props.videos[0].image} controls className='hero__video'></video>
    </section>
    )
}

export default Video
