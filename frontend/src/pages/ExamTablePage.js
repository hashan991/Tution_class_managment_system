import { useNavigate } from 'react-router-dom';
import { deleteExam, getExams } from '../services/api';
import React, { useState, useEffect } from 'react';
import ExamTable from '../components/ExamTable';



const ExamTablePage = () => {

const [exams, setExams] = useState([]);
const navigate = useNavigate()

useEffect(() => {
  fetchExam();
}, []);

const fetchExam = async () => {
  try {
    const response = await getExams();
    setExams(response.data);
  } catch (error) {
    console.error('Error fetching items:', error);
  }
};

const handleDelete = async (id) => {
  try {
    await deleteExam(id);
    fetchExam();
  } catch (error) {
    console.error('Error deleting item:', error);
  }
};

const handleEdit = (exam3) => {
  // Navigate to the edit page and pass the item data as state
  console.log('Navigating with item:', exam3);
  navigate('/ExamFormPage', { state: { exam3 } });
};

    return(
        <div>
        <h1>Item List</h1>
        <button onClick={() => navigate('/ExamFormPage')}>Add Item</button>
        <ExamTable exams={exams} onEdit={handleEdit} onDelete={handleDelete}/>

      </div>

    );
};

export default ExamTablePage;