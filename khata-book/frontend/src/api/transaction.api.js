import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
});

export const getTransactions = (khataId) => API.get(`/transactions/${khataId}`);
export const createTransaction = (data) => API.post(`/transactions`, data);
export const updateTransaction = (id, data) => API.put(`/transactions/${id}`, data);
export const deleteTransaction = (id) => API.delete(`/transactions/${id}`);

