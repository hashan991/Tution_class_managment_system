import React from 'react';

const ExamTable = ({ exams , onEdit , onDelete}) => {
  return (
    <div>
      <ul>
        {exams.map((exam) => (
          <li key={exam._id}>
            {exam.name} - {exam.date}
            <button onClick={() => onEdit(exam)}>Edit</button>
            <button onClick={() => onDelete(exam._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExamTable;
