import React from "react";
import "./Page.scss";

class Page extends React.Component {
  render() {
    return (
      <div>
        <h2>Upload Video</h2>
        <h5>VIDEO THUMBNAIL</h5>
        <form>
          <h5>TITLE YOUR VIDEO</h5>
          <input type="text" placeholder="Add a title to your video"/>
          <h5>ADD A VIDEO DESCRIPTION</h5>
          <input type="text" placeholder="Add a description to your video"/>
          <button>PUBLISH</button>
        </form>
        <p>CANCEL</p>
      </div>
    );
  }
}

export default Page;
