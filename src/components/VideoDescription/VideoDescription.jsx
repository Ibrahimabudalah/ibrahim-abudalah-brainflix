import React from 'react'

function VideoDescription(props) {
  return (
    <div>
      <p>{props.videos.description}</p>
    </div>
  );
}

export default VideoDescription