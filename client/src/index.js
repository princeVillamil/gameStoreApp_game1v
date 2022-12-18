import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainStore from './pages/MainStore';
import GameOverView from './pages/GameOverView'
import { BrowserRouter, Routes, Route } from "react-router-dom"

// {/* <BrowserRouter>
// <Routes>
//   <Route path="/" element={<Menu/>} />
//   <Route path="/:id" element={<Game/>} />
//   {/* <Route path="/" element={<Home/>} />
//   <Route path="/hotels" element={<List/>} />
//   <Route path="/hotels/:id" element={<Hotel/>} /> */}
// </Routes>

// </BrowserRouter> */}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainStore/>}/>
        <Route path="/game/:id" element={<GameOverView/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

