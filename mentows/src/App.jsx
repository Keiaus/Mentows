import React from 'react';
import './App.css';
import Navbar from './components/homepage/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Documentation from './pages/documentation';
import Downloads from './pages/downloads';
import Topics from './pages/topics';
import Login from './pages/login';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
          {/* <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/documentation' element={<Documentation/>} />
          <Route path='/downloads' element={<Downloads/>} />
          <Route path='/topics' element={<Topics/>} />
          <Route path='/login' element={<Login/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;