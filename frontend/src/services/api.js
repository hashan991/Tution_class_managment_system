import axios from 'axios';

const API_URL1 = 'http://localhost:5000/api/exam'; // Backend endpoint

export const getExams = () => axios.get(API_URL1);
export const createExam = (exam4) => axios.post(API_URL1, exam4);
export const updateExam = (id, exam5) => axios.put(`${API_URL1}/${id}`, exam5);
export const deleteExam = (id) => axios.delete(`${API_URL1}/${encodeURIComponent(id)}`);