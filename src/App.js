import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import LoginContainer from "./containers/LoginContainer";



const App = () => {
  return (
    <Routes>
        <Route exact path="/" element={<div>home</div>}/>
        <Route exact path="/login" element={<LoginContainer/>}/>
        <Route exact path="/leaderboard" element={<div>leaderboard</div>}/>
        <Route exact path="/add" element={<div>add</div>}/>
        <Route exact path="/question" element={<div>question</div>}/>
      </Routes>
  );
};

export default App;
