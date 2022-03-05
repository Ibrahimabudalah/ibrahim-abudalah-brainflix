import { Component } from "react";
import DefaultVideo from "../../components/DefaultVideo/DefaultVideo";

function Home({ selectedVideo }) {
//   console.log(this.props.selectedVideo);
  return (
    <div>
      <DefaultVideo selectedVideo={selectedVideo} />
    </div>
  );
}
export default Home;
