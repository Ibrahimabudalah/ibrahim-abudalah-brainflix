import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import SideVideosList from "../src/components/SideVideoList/SideVideoList";
import Home from "../src/pages/Home/Home";
import Page from "./pages/Upload/Upload";
import api from "../src/utils/api";

class App extends React.Component {
  state = {
    videoList: null,
    selectedVideo: null,
  };

  componentDidMount() {
    api.getAll()
    .then((res) => {
      this.setState({
        videoList: res.data,
      });
      api.getVideoById(this.state.videoList[0].id).then((res) => {
        this.setState({
          selectedVideo: res.data,
        });
      });
    });
  }
  render() {
    // const filteredVideos = this.state.videoList.filter(
    //   (video) => video.id !== this.state.selectedVideo.id
    // );
    console.log(this.state.selectedVideo);
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact render={() => <Home selectedVideo={this.state.selectedVideo} />} />
          <Route exact path="/page" component={Page} />
        </Switch>
        {/* <SideVideosList
          // list={filteredVideos}
          // eventHandler={this.updateSelectedVideo}
        /> */}
      </BrowserRouter>
    );
  }
}
export default App;
