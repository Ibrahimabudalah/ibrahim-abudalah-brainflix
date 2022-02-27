import React from 'react';
import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/MainVideo/MainVideo";
import videoDetails from "../src/data/video-details.json";
import videosList from '../src/data/videos.json';
import VideoInfo from "./components/VideoInfo/VideoInfo";
import VideoDescription from "./components/VideoDescription/VideoDescription";
import SideVideos from './components/SideVideo/SideVideo';

class App extends React.Component {

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Video videos={videoDetails} />
          <VideoInfo info={videoDetails} />
          <VideoDescription description={videoDetails} />
          <SideVideos sideVideos={videosList}/>
        </header>
      </div>
    );
  }
}
export default App;
