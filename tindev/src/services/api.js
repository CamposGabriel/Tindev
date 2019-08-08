import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:0811'
});

export default api;
