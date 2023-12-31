import axios from "axios";

const API_URL = "https://api.github.com/users";

const API = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
