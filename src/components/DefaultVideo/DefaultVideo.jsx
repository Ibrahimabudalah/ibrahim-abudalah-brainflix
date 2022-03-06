// import React from "react";
// // import axios from "axios";
// import HeroVideo from "../HeroVideo/HeroVideo";
// import VideoInfo from "../VideoInfo/VideoInfo";
// import VideoDescription from "../VideoDescription/VideoDescription";
// import CommentsForm from "../CommentsForm/CommentsForm";
// import CommentsList from "../CommentsList/CommentsList";
// // import SideVideosList from "../SideVideoList/SideVideoList";
// // import videoDetails from "../../data/video-details.json";
// // import videosList from "../../data/videos.json";
// import api from '../../utils/api';
// class DefaultVideo extends React.Component {
//   state = {
//     videoList: null,
//     selectedVideo: null,
//   };

//   componentDidMount() {
//     api.getAll().then((res) => {
//       this.setState({
//         videoList: res.data,
//       });
//       api.getVideoById(this.state.videoList[0].id).then((res) => {
//         this.setState({
//           selectedVideo: res.data,
//         });
//       });
//     });
//     console.log("mount");
//   }
//   componentDidUpdate(prevProps, prevState){
//     if(prevProps.match.params.id !== this.props.match.params.id){
//       console.log("update");
//        api.getVideoById(this.state.videoList[0].id).then((res) => {
//          this.setState({
//            selectedVideo: res.data,
//          });
//        });
//     }
//   }

//   render() {
//     // const filteredVideos = this.state.videoList.filter(
//     //   (video) => video.id !== this.state.selectedVideo.id
//     // );
//     // console.log(this.state.selectedVideo);
//     return (
//       <div>
//         {/* <HeroVideo video={this.state.selectedVideo} /> 
//         <VideoInfo videoInfo={this.state.selectedVideo} />
//         <VideoDescription videos={selectedVideo} />
//       <CommentsForm comments={this.state.videoDetails.comments} />
//       <CommentsList comments={selectedVideo} /> */}
//       </div>
//     );
//   }
// }


// export default DefaultVideo;
