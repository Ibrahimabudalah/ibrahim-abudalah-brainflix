import { Component } from "react";
import api from "../../utils/api";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import CommentsList from "../../components/CommentsList/CommentsList";
import SideVideosList from "../../components/SideVideoList/SideVideoList";

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
    console.log(videoId);
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
    console.log(this.props.match);
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getVideo(this.props.match.params.id || this.state.videoList[0].id);
      console.log("update");
    }
  }

  render() {
    const { selectedVideo, videoList } = this.state;
    const filteredVideos = selectedVideo
      ? videoList.filter((video) => video.id !== selectedVideo.id)
      : videoList;

    if (!this.state.selectedVideo || !this.state.videoList) {
      return <h1></h1>;
    }
    return (
      <div>
        <HeroVideo video={selectedVideo.image} />
        <VideoInfo videoInfo={selectedVideo} />
        <VideoDescription video={selectedVideo} />
        <CommentsForm comments={selectedVideo.comments} />
        <CommentsList comments={selectedVideo.comments} />
        <SideVideosList list={filteredVideos} />
      </div>
    );
  }
}
export default Home;
