import React from 'react';
import Calculator from './components/Calculator';
import './App.css';
import Quotes from './components/quotes';

function App() {
  const [result, setResult] = React.useState({ total: null, next: null, operation: null });

  return (
    <div className="App">
      <Quotes />
      <Calculator result={result} setResult={setResult} />
    </div>
  );
}

export default App;
