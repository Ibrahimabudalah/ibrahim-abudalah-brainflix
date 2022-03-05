import React from 'react'
import './VideoDescription.scss';

function VideoDescription({ video }) {
  return (
    <div className="description">
      <p>{video.description}</p>
    </div>
  );
}
 
export default VideoDescription