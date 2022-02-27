import './App.scss';
import Header from "./components/Header/Header";
import Video from "./components/HeroVideo/MainVideo";
import videos from '../src/data/video-details.json';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Video videos={videos}/>
      </header>
    </div>
  );
}

export default App;
