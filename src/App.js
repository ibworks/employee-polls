import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<div>home</div>}/>
      <Route exact path="/login" element={<div>login</div>}/>
      <Route exact path="/leaderboard" element={<div>leaderboard</div>}/>
      <Route exact path="/add" element={<div>add</div>}/>
      <Route exact path="/question" element={<div>question</div>}/>
    </Routes>
  );
};

export default App;
