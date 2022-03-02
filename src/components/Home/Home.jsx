import React from "react";
import MainVideo from "../MainVideo/MainVideo";
import VideoInfo from "../VideoInfo/VideoInfo";
import VideoDescription from "../VideoDescription/VideoDescription";
import CommentsForm from "../CommentsForm/CommentsForm";
import CommentsList from "../CommentsList/CommentsList";
import SideVideosList from "../SideVideoList/SideVideoList";
import videoDetails from "../../data/video-details.json";
import videosList from "../../data/videos.json";

class Home extends React.Component {
  state = {
    videoDetails: videoDetails[0],
    videoList: videosList,
  };

  updateSelectedVideo = (id) => {
    let selectedVideo = videoDetails.find((video) => video.id === id);

    this.setState({
      videoDetails: selectedVideo,
    });
  };

  render() {
    const filteredVideos = this.state.videoList.filter(
      (video) => video.id !== this.state.videoDetails.id
    );
    return ( 
      <div>
        <MainVideo videos={this.state.videoDetails} />
        <VideoInfo videos={this.state.videoDetails} />
        <VideoDescription videos={this.state.videoDetails} />
        <CommentsForm comments={this.state.videoDetails.comments} />
        {/* <Comment comments={this.state.videoDetails} /> */}
        <CommentsList comments={this.state.videoDetails.comments} />

        {/* <SideVideos
            sideVideos={this.selectedVideo}
            eventHandler={this.updateSelectedVideo}
        /> */}
        <SideVideosList
          list={filteredVideos}
          eventHandler={this.updateSelectedVideo}
        />
      </div>
     );
  }
}

export default Home;
