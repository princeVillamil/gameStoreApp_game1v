import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainStore from './pages/MainStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainStore/>
  </React.StrictMode>
);

