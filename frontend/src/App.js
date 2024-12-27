import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import ExamTablePage from './pages/ExamTablePage';

function App() {
  return (
  <BrowserRouter>

    
      <Routes>
        <Route path="/" element={<ExamTablePage />} />
      </Routes>

  </BrowserRouter>

  );
}

export default App;
