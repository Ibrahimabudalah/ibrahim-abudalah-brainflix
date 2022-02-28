import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import videoDetails from "../src/data/video-details.json";
import videosList from "../src/data/videos.json";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import SideVideos from "./components/SideVideo/SideVideo";
import SideVideosList from "./components/SideVideoList/SideVideoList";

class App extends React.Component {
  state = {
    videoDetails: videoDetails[0],
    videoList: videosList,
  };

  updateSelectedVideo = (id) => {
     let selectedVideo = videoDetails.find(video => video.id === id);

     this.setState({
       videoDetails: selectedVideo,
     });
  };

  render() {
    const filteredVideos = this.state.videoList.filter(video => video.id !== this.state.videoDetails.id)
    console.log("app filter videos", filteredVideos)
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <MainVideo videos={this.state.videoDetails} />
          <VideoInfo videos={this.state.videoDetails} />
          <VideoDescription videos={this.state.videoDetails} />
          {/* <SideVideos
            sideVideos={this.selectedVideo}
            eventHandler={this.updateSelectedVideo}
          /> */}
          <SideVideosList
            list={filteredVideos}
            eventHandler={this.updateSelectedVideo}
          />
        </header>
      </div>
    );
  }
}
export default App;
