import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Details from './pages/Details';
import Login from './pages/Login';
import Contact from './pages/Contact';
import About from './pages/About';

import Menu from './components/Menu';

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/detalhes" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
