import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import SideVideosList from "../src/components/SideVideoList/SideVideoList";
import Home from "../src/pages/Home/Home";
import Upload from "./pages/Upload/Upload";
import api from "../src/utils/api";

class App extends React.Component {
  render() {
    // const filteredVideos = this.state.videoList.filter(
    //   (video) => video.id !== this.state.selectedVideo.id
    // );
    // console.log(this.state.selectedVideo);
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/upload" component={Upload} />
          <Route path="/:id" render={(routerProps) => <Home {...routerProps}/>} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
