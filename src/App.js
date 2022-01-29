
import React from 'react';
import './App.css';
import Login from './pages/Login'
import { Routes, Route,} from "react-router-dom";
import Home from "./pages/Home"
import Content from './pages/Content'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path ='/content' element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
