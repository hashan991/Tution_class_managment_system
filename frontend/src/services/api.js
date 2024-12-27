import axios from 'axios';

const API_URL1 = 'http://localhost:5000/api/exam'; // Backend endpoint

export const getItems = () => axios.get(API_URL1);
export const createItem = (exam) => axios.post(API_URL1, exam);
export const updateItem = (id, exam) => axios.put(`${API_URL1}/${id}`, exam);
export const deleteItem = (id) => axios.delete(`${API_URL1}/${encodeURIComponent(id)}`);