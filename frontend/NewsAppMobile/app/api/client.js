import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.96.1:3333/api',
})