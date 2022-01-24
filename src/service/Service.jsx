import axios from 'axios';

const Service = axios.create({
  baseURL: 'http://localhost:3333',
});

export default Service;
