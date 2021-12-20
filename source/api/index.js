import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.covid19api.com',
  timeout: 1000,
});
