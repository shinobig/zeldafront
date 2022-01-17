import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ROOT || 'http://localhost:8080/'
})

export default axiosInstance
