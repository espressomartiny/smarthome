import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import smartHomeData from './smartHomeData';
import Header from './compotents/Header';
import Dashboard from './compotents/Dashboard';



const App = () => (
  <>
<div className="container">
  <Header title = "Chytrá domácnost" />
  <Dashboard data = {smartHomeData}/>
</div>
  </>
);

createRoot(
  document.querySelector('#app'),
).render(<App />);