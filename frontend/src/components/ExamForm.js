import React, { useState, useEffect } from 'react';

const ExamForm = ({ onSubmit , existingExam}) => {
    const [name, setName] = useState( '');
    const [date, setDescription] = useState('');
  
    useEffect(() => {
        if (existingExam) {
          setName(existingExam.name);
          setDescription(existingExam.date);
        }
      }, [existingExam]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, date});
      };

    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Date</label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button type="submit">{existingExam ? 'Update Item' : 'Create Item'}</button>
        </form>
      );




};

export default ExamForm;
