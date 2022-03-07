import React from "react";
import "./Upload.scss";
import { Link } from "react-router-dom";

class Page extends React.Component {
  render() {
    return (
      <div>
        <h2>Upload Video</h2>
        <h5>VIDEO THUMBNAIL</h5>
        <form>
          <h5>TITLE YOUR VIDEO</h5>
          <input
            type="text"
            placeholder="Add a title to your video"
            name="title"
          />
          <h5>ADD A VIDEO DESCRIPTION</h5>
          <input
            type="text"
            placeholder="Add a description to your video"
            name="description"
          />
          <Link to="/" onClick={() => alert("Video successfully uploaded")}>
            {" "}
            PUBLISH{" "}
          </Link>
        </form>
        <Link>CANCEL</Link>
      </div>
    );
  }
}

export default Page;
