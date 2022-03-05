import React from "react";
// import axios from "axios";
import HeroVideo from "../HeroVideo/HeroVideo";
import VideoInfo from "../VideoInfo/VideoInfo";
import VideoDescription from "../VideoDescription/VideoDescription";
import CommentsForm from "../CommentsForm/CommentsForm";
import CommentsList from "../CommentsList/CommentsList";
// import SideVideosList from "../SideVideoList/SideVideoList";
// import videoDetails from "../../data/video-details.json";
// import videosList from "../../data/videos.json";
// import api from '../../utils/api';
function DefaultVideo(selectedVideo) {
  console.log(selectedVideo);
  return (
    <div>
      <HeroVideo video={selectedVideo} />
      {/* <VideoInfo videos={selectedVideo} /> */}
      {/* <VideoDescription videos={selectedVideo} />
      <CommentsForm comments={this.state.videoDetails.comments} />
      <CommentsList comments={selectedVideo} /> */}
    </div>
  );
}


export default DefaultVideo;
