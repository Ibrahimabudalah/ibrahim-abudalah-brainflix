import axios from "axios";

const BASE_URL = "https://brainflix-apii.herokuapp.com/";
// const API_KEY = "2596369b-58ce-414f-bde8-c1ee6434cbda";

export default {
  getAll: () => axios.get("https://brainflix-apii.herokuapp.com/videos"),
  //this method will be used to get all the data from the api using the key
  getVideoById: (id) =>
    axios.get(`${BASE_URL}videos/${id}`),
  //   //this method will be used to get a specific video from the api using its "id"
};
