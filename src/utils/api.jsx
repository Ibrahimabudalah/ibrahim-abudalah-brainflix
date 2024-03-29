import axios from "axios";

const BASE_URL = "https://brainflix-api-1233.onrender.com/";
// const API_KEY = "2596369b-58ce-414f-bde8-c1ee6434cbda";

const apiUtils = {
  getAll: () => axios.get(`${BASE_URL}videos`),
  //this method will be used to get all the data from the api using the key
  getVideoById: (id) => axios.get(`${BASE_URL}videos/${id}`),
  //   //this method will be used to get a specific video from the api using its "id"
};
export default apiUtils;
