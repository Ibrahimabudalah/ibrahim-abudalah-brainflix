import React from 'react';
import "./App.scss";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import videoDetails from "../src/data/video-details.json";
import videosList from '../src/data/videos.json';
import VideoInfo from "./components/VideoInfo/VideoInfo";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import SideVideos from './components/SideVideo/SideVideo';

class App extends React.Component {

  state = {
    videoDetails:videoDetails
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <MainVideo videos={this.state.videoDetails[0]} />
          <VideoInfo videos={this.state.videoDetails[0]} />
          <VideoDescription videos={this.state.videoDetails[0]} />
          <SideVideos sideVideos={videosList} />
        </header>
      </div>
    );
  }
}
export default App;
