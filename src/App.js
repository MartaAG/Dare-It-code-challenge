
import React from 'react';
import './App.css';
import Login from './pages/Login'
import { Routes, Route,} from "react-router-dom";
import Home from "./pages/Home"
import Content from './pages/Content'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Movies from './components/organism/Movies';
import Movie from './components/organism/Movie';
 

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path ='/content' element={<Content />} />
        <Route path ='/movies' element={<Movies />} />
        <Route path ='/movies/:id' element={<Movie />} />
      
      </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
