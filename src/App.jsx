import React from 'react';
import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/HeroVideo/MainVideo";
import videos from "../src/data/video-details.json";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import VideoDescription from "./components/VideoDescription/VideoDescription";

class App extends React.Component {

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Video videos={videos} />
          <VideoInfo info={videos} />
          <VideoDescription discription={videos} />
        </header>
      </div>
    );
  }
}
export default App;
