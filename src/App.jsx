import React from 'react';
import logo from './assets/innomatics-logo1.webp'; // Adjust the path according to where your logo is located
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './components/style.css'; // Import your CSS file
import NotFound from './components/NotFound.jsx';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" style={{ width: '300px', height: '50px' }} />
      </header>
    </div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/*" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;




