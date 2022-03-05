import React from 'react'
import './VideoDescription.scss';

function VideoDescription({ selectedVideo }) {
  return (
    <div className="description">
      <p>{selectedVideo.description}</p>
    </div>
  );
}
 
export default VideoDescription