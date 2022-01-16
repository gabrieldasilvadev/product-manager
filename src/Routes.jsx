import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Details from './pages/Details';

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/detalhes" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
