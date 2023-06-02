import React from 'react';
import Calculator from './components/Calculator';
import './App.css';
import Quotes from './components/quotes';

function App() {
  const [quote, setQuote] = React.useState(['loading...']);
  const [result, setResult] = React.useState({ total: null, next: null, operation: null });

  React.useEffect(() => {
    setQuote('loading...');
    fetch('https://api.api-ninjas.com/v1/quotes?category=computers', {
      method: 'GET',
      headers: {
        'X-API-Key': 'OAcvP3F39QWUffY523tlRg==3Y15nTus6njhSQ1w',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const res = `${data[0].quote} - ${data[0].author}`;
        setQuote(res);
      })
      .catch((error) => setQuote(['error ', error.message, ' quote']));
  }, []);

  return (
    <div className="App">
      <Quotes quote={quote} />
      <Calculator result={result} setResult={setResult} />
    </div>
  );
}

export default App;
