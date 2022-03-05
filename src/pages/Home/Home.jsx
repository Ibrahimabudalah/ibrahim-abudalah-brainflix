import { Component } from "react";
import DefaultVideo from "../../components/DefaultVideo/DefaultVideo";
import api from "../../utils/api";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import CommentsList from "../../components/CommentsList/CommentsList";
import Comment from "../../components/Comment/Comment";

class Home extends Component {
  state = {
    videoList: [],
    selectedVideo: [],
  };

  getVideo = (videoId) => {
      api.getVideoById(this.state.videoList[0].id).then((res) => {
        this.setState({
          selectedVideo: res.data,
        });
      });
  }
  getAllVideos = () => {
      api.getAll().then((res) => {
        this.setState({
          videoList: res.data,
        });
        this.getVideo(res.data[0].id)
      });
  }
  componentDidMount() {
      this.getAllVideos()
    // console.log("mount");
  }
  componentDidUpdate(prevProps, prevState) {
    //   console.log(prevProps, this.props);
    //   console.log("update");
      if (prevProps.match.params.id !== this.props.match.params.id) {
          this.getVideo(this.props.match.params.id || this.state.videoList[0].id)
        //   console.log("update");
    }
  }

  render() {
    // const filteredVideos = this.state.videoList.filter(
    //       (video) => video.id !== this.state.selectedVideo.id
    //     );
    // console.log(this.state);
    const {selectedVideo, videoList} = this.state
    // console.log(selectedVideo.comments);
    console.log(selectedVideo);
    return (
      <div>
       <HeroVideo video={selectedVideo.image} />
        <VideoInfo videoInfo={selectedVideo} />
        <VideoDescription video={selectedVideo} />
        {/* <CommentsForm comments={selectedVideo.comments} /> */}
        <CommentsList comments={selectedVideo.comments} />
        {/* <Comment /> */}
      </div>
    );
}
}
export default Home;
