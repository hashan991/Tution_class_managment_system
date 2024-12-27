import axios from 'axios';

const API_URL1 = 'http://localhost:5000/api/exam'; // Backend endpoint

export const getExams = () => axios.get(API_URL1);
export const createExam = (exam) => axios.post(API_URL1, exam);
export const updateExam = (id, exam) => axios.put(`${API_URL1}/${id}`, exam);
export const deleteExam = (id) => axios.delete(`${API_URL1}/${encodeURIComponent(id)}`);