import axios from "axios";

axios.interceptors.request.use(response => {
  return response
},
error => {
  return Promise.reject(error.message)
});

export const Http = axios.create({
  baseURL: 'http://localhost:3000'
});