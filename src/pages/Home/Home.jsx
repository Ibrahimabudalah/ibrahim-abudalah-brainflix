import { Component } from "react";
import api from "../../utils/api";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import CommentsList from "../../components/CommentsList/CommentsList";
import SideVideosList from "../../components/SideVideoList/SideVideoList";
import "./Home.scss";

class Home extends Component {
  state = {
    videoList: null,
    selectedVideo: null,
  };

  getVideo = (videoId) => {
    api.getVideoById(videoId || this.state.videoList[0].id).then((res) => {
      this.setState({
        selectedVideo: res.data,
      });
    });
  };

  getAllVideos = () => {
    const videoId = this.props.match.params.id;
    api.getAll().then((res) => {
      this.setState({
        videoList: res.data,
      });
      this.getVideo(videoId || res.data[0].id);
    });
  };

  componentDidMount() {
    this.getAllVideos();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getVideo(this.props.match.params.id || this.state.videoList[0].id);
    }
    window.scrollTo(0, 0);
  }

  render() {
    const { selectedVideo, videoList } = this.state;
    const filteredVideos = selectedVideo
      ? videoList.filter((video) => video.id !== selectedVideo.id)
      : videoList;

    if (!this.state.selectedVideo || !this.state.videoList) {
      return <h1>Loading...</h1>;
    }
    return (
      <main className="home">
        <HeroVideo video={selectedVideo.image} />
        <div className="home__container">
          <div className="home__container__left">
            <VideoInfo videoInfo={selectedVideo} />
            <VideoDescription video={selectedVideo} />
            <CommentsForm comments={selectedVideo.comments} />
            <CommentsList comments={selectedVideo.comments} />
          </div>
          <div className="home__container__right">
            <SideVideosList list={filteredVideos} />
          </div>
        </div>
      </main>
    );
  }
}
export default Home;
