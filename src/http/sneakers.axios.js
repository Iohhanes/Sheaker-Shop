import axios from 'axios';

const sneakersApi = axios.create({
  baseURL: '/',
  responseType: 'json',
  headers: { 'Access-Control-Allow-Origin': '*' },
});

export default sneakersApi;
