import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainStore from './pages/MainStore';
import GameOverView from './pages/GameOverView'
import Signup from './pages/Signup';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainStore/>}/>
        <Route path="/game/:id" element={<GameOverView/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

