import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Results from './components/Results';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<App />} />
        </Route>

        <Route path='/results' element={<Layout /> }>
          <Route index element={<Results />} />
        </Route>

        <Route path='/pomoc' element={<Layout /> }>
        </Route>

        <Route path='/konto' element={<Layout /> }>
        </Route>

        <Route path='/koszyk' element={<Layout /> }>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

