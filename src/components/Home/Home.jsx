import React from "react";
import axios from "axios";
import MainVideo from "../HeroVideo/HeroVideo";
import VideoInfo from "../VideoInfo/VideoInfo";
import VideoDescription from "../VideoDescription/VideoDescription";
import CommentsForm from "../CommentsForm/CommentsForm";
import CommentsList from "../CommentsList/CommentsList";
import SideVideosList from "../SideVideoList/SideVideoList";
import videoDetails from "../../data/video-details.json";
import videosList from "../../data/videos.json";
import api from '../../utils/api';

class Home extends React.Component {
  state = {
    videoList: null,
    clickedVideo: null,
  };

  componentDidMount() {
    api.getAll().then((res) => {
      console.log(api.getAll);
      this.setState({
        videoList: res.data,
      });
      api.getVideoById(this.state.videoList[0].id).then((res) => {
        console.log(res.data);
        this.setState({
          clickedVideo: res.data,
        });
      });
    });
  }

  render() {
    const filteredVideos = this.state.videoList.filter(
      (video) => video.id !== this.state.videoDetails.id
    );
    return (
      <div>
        {/* <MainVideo videos={this.state.videoDetails} />
        <VideoInfo videos={this.state.videoDetails} />
        <VideoDescription videos={this.state.videoDetails} />
        <CommentsForm comments={this.state.videoDetails.comments} />
        <CommentsList comments={this.state.videoDetails.comments} />
        <SideVideosList
          list={filteredVideos}
          eventHandler={this.updateSelectedVideo}
        /> */}
      </div>
    );
  }
}

export default Home;
