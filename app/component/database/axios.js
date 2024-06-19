import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 
//   'https://us-central1-clone-4c5d6.cloudfunctions.net/api'
  'http://127.0.0.1:5001/clone-4c5d6/us-central1/api' 
});

export default instance;