import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || `http://${window.location.hostname}:5000/api`,
  maxContentLength: Infinity,
  maxBodyLength: Infinity
});

export default API;
