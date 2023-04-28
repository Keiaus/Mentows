import React from 'react';
import './styles/App.css';
import Navbar from './components/homepage/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Documentation from './pages/Documentation';
import Downloads from './pages/Downloads';
import Topics from './pages/Topics';
import Login from './pages/Login';
import SignUp from './pages/Signup';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Documentation' element={<Documentation />} />
        <Route path='/Downloads' element={<Downloads />} />
        <Route path='/Topics' element={<Topics />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;