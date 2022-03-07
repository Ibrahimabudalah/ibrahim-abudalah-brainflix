import React from "react";
import "./Page.scss";

function Page() {
  handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2>Upload Video</h2>
      <h5>VIDEO THUMBNAIL</h5>
      <form onSubmit={handleSubmit}>
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
          onChange={this.handleSubmit}
          value={this.state.description}
        />
        <button>PUBLISH</button>
      </form>
      <p>CANCEL</p>
    </div>
  );
}

export default Page;
