import React, { useState, useEffect } from 'react';
import { createExam, updateExam } from '../services/api';
import ExamForm from '../components/ExamForm';
import { useNavigate, useLocation } from 'react-router-dom'; // useLocation instead of useParams




const ExamFormPage = () => {
    const [editingExam, setEditingExam] = useState(null);
    const { state } = useLocation(); 
    const navigate = useNavigate();

    useEffect(() => {
        if (state?.exam3) {
          setEditingExam(state.exam3);  // Set the item data passed via state
          
        }
      }, [state]);


    const handleCreate = async (exam2) => {
        try {
          await createExam(exam2);  // Create a new item
          navigate('/ExamTablePage');  // Redirect to the item list page after creation
        } catch (error) {
          console.error('Error creating item:', error);
        }
      };

      const handleUpdate = async (exam1) => {
        try {
          await updateExam(editingExam._id, exam1);  // Update the existing item
          navigate('/ExamTablePage');  // Redirect to the item list page after updating
        } catch (error) {
          console.error('Error updating item:', error);
        }
      };



    return (
        <div>
         
        
        <ExamForm
          onSubmit={ editingExam ? handleUpdate : handleCreate}  // Choose method based on edit or create
          existingExam={editingExam} // Pass the existing item if editing
        />
      </div>

    );
}
export default ExamFormPage;
