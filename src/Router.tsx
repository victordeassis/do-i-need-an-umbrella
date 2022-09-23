import React, { Fragment } from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
