import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://ris-evm-3o-default-rtdb.firebaseio.com/',
});

export const fetcher = (url: string) => api.get(url).then((res) => res.data);
