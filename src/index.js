import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Results from './components/Results';
import LoginPage from './components/LoginPage';
import AccountPage from './components/AccountPage';
import ShoppingCart from './components/ShoppingCart';
import Shipping from './components/Shipping';
import Product from './components/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<App />} />
          <Route path='results/:category' element={<Results />} />
          <Route path='konto' element={<AccountPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='koszyk' element={<ShoppingCart />} />
          <Route path='koszyk/dostawa' element={<Shipping />} />
          <Route path='/produkt/:id' element={<Product />} />
        </Route>
        <Route path='/pomoc' element={<Layout />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
