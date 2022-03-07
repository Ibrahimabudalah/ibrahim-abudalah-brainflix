import axios from "axios";

const BASE_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "2596369b-58ce-414f-bde8-c1ee6434cbda";

export default {
  getAll: () => axios.get(`${BASE_URL}/videos?api_key=${API_KEY}`),
  //this method will be used to get all the data from the api using the key
  getVideoById: (id) =>
    axios.get(`${BASE_URL}/videos/${id}?api_key=${API_KEY}`),
    //this method will be used to get a specific video from the api using its "id"
};
