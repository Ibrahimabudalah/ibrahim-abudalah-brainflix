import React from 'react'
import './VideoDescription.scss';

function VideoDescription(props) {
  return (
    <div className='description'>
      <p>{props.videos.description}</p>
    </div>
  );
}
 
export default VideoDescription