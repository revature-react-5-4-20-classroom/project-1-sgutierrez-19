import axios from 'axios';

export const server = axios.create({
  baseURL: 'http://13.56.189.76:3004',
  withCredentials: true,
});
