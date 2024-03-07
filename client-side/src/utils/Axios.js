import Axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const axios = Axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
