import axios from "axios";
import url from "./global.env"

const axios_instance = axios.create({
  baseURL: url.apiURL,
  headers: { "Authorization": `Bearer ${localStorage.getItem("healthifyToken")}` },
});

export default axios_instance