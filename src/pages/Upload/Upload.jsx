import React from "react";
import "./Upload.scss";
import uploadPicture from "../../assets/images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
const { v4: uuid4 } = require("uuid");

function Page({ history }) {
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Video Uploaded Successfully");
    
    axios
      .post("https://brainflix-apii.herokuapp.com/videos", {
        id: uuid4(),
        title: e.target.title.value,
        description: e.target.description.value,
      })
      .then((res) => {
        history.push(`/videos/${res.data.id}`);
      });
  };

  return (
    <div className="upload">
      <h2 className="upload__header">Upload Video</h2>

      <div className="upload__container__one">
        <div className="upload__container__one__sub">
          <h5 className="upload__subheaders">VIDEO THUMBNAIL</h5>
          <img src={uploadPicture} alt="upload" className="upload__picture" />
        </div>
        <form className="upload__form" onSubmit={submitHandler}>
          <h5 className="upload__subheaders">TITLE YOUR VIDEO</h5>
          <input
            type="text"
            placeholder="Add a title to your video"
            name="title"
            className="upload__form__title"
          />
          <h5 className="upload__subheaders">ADD A VIDEO DESCRIPTION</h5>
          <input
            type="text"
            placeholder="Add a description to your video"
            name="description"
            className="upload__form__description"
          />
          <div className="upload__form__container">
            <button className="upload__form__button">PUBLISH</button>
            <Link to="/" className="upload__form__cancel">
              CANCEL
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
