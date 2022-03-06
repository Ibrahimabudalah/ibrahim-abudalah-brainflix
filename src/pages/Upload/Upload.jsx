import React from "react";
import "./Upload.scss";

class Page extends React.Component {
  state = {
    title: "",
    description: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };
  handleSubmit = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };
  render() {
    return (
      <div>
        <h2>Upload Video</h2>
        <h5>VIDEO THUMBNAIL</h5>
        <form onSubmit={this.handleSubmit}>
          <h5>TITLE YOUR VIDEO</h5>
          <input
            type="text"
            placeholder="Add a title to your video"
            name="title"
            onChange={this.handleSubmit}
            value={this.state.title}
          />
          <h5>ADD A VIDEO DESCRIPTION</h5>
          <input
            type="text"
            placeholder="Add a description to your video"
            name="description"
            onChange={this.handleSubmit}
            value={this.state.description}
          />
          <button onClick={this.handleSubmit}>PUBLISH</button>
        </form>
        <p>CANCEL</p>
      </div>
    );
  }
}

export default Page;
