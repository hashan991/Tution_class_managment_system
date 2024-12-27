import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import ExamTablePage from './pages/ExamTablePage';
import StartupPage from './pages/StartupPage';
import ExamFormPage from './pages/ExamFormPage';

function App() {
  return (
  <BrowserRouter>

    
      <Routes>
        <Route path="/" element={<StartupPage />} />
        <Route path="/ExamTablePage" element={<ExamTablePage />} />
        <Route path="/ExamFormPage" element={<ExamFormPage />} />

      </Routes>

  </BrowserRouter>

  );
}

export default App;
