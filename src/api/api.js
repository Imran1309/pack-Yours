import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  maxContentLength: Infinity,
  maxBodyLength: Infinity
});

export default API;
