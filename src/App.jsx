import './App.scss';
import Header from "./components/Header/Header";
import Video from "./components/HeroVideo/MainVideo";
import videos from '../src/data/video-details.json';
import VideoInfo from './components/VideoInfo/VideoInfo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Video videos={videos}/>
        <VideoInfo info={videos}/>
      </header>
    </div>
  );
}

export default App;
