import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';

import StartupPage from './pages/StartupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
