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
        </Route>

        <Route path='/results' element={<Layout />}>
          <Route index element={<Results />} />
        </Route>

        <Route path='/pomoc' element={<Layout />}>
        </Route>

        <Route path='/konto' element={<Layout />}>
          <Route index element={<AccountPage />} />
        </Route>

        <Route path='/login' element={<Layout />}>
          <Route index element={<LoginPage />} />
        </Route>

        <Route path='/koszyk' element={<Layout />}>
          <Route index element={<ShoppingCart />} />
        </Route>

        <Route path='/koszyk/dostawa' element={<Layout />}>
          <Route index element={<Shipping />} />
        </Route>

        <Route path='/produkt' element={<Layout />}>
          <Route index element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

