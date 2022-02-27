import React from 'react'

function VideoDescription(props) {
  return (
    <div>
        <p>{props.description[0].description}</p>
    </div>
  )
}

export default VideoDescription