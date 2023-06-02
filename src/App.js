import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  const [result, setResult] = React.useState({ total: null, next: null, operation: null });
  return (
    <div className="App">
      <Calculator result={result} setResult={setResult} />
    </div>
  );
}

export default App;
