import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LivreManagerBootstrap from './components/LivreManagerBootstrap';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livres" element={<LivreManagerBootstrap />} />
      </Routes>
    </Router>
  );
}

export default App;
