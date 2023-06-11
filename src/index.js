import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/Global.css';
/*Components */
import { Footer, Navbar } from './components';
/*Pages */
import { ExercisesDetails, Home } from './templates';
import { Box } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExercisesDetails />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  </React.StrictMode>,
);
