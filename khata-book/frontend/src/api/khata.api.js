import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
});

export const getAllKhatabooks = () => API.get('/khata');
export const createKhata = (data) => API.post('/khata', data);
export const deleteKhata = (id) => API.delete(`/khata/${id}`);
export const updateKhata = (id, data) => API.put(`/khata/${id}`, data);
