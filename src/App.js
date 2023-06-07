import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import './App.css';
import Home from './components/home';
import Quotes from './components/quotes';
import Navbar from './components/Navbar';

function App() {
  const [result, setResult] = React.useState({
    total: null,
    next: null,
    operation: null,
  });

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/calculator"
          element={<Calculator result={result} setResult={setResult} />}
        />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </>
  );
}

export default App;
