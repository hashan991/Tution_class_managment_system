import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import ExamTablePage from './pages/ExamTablePage';
import ExamFormPage from './pages/ExamFormPage';
import HomePage from './pages/HomePage';
import StartupPage from './pages/StartupPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './context/AuthContext'; // Assuming you have an AuthProvider for context
import Footer from './layouts/Footer';


function App() {
  return (
  <BrowserRouter>
  
      <AuthProvider>
          

    
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/ExamTablePage" element={<ExamTablePage />} />
        <Route path="/ExamFormPage" element={<ExamFormPage />} />
        <Route path="/" element={<StartupPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />

      </Routes>

      <Footer/>

    </AuthProvider>
    
  </BrowserRouter>

  );
}

export default App;
