import React from 'react';

function Quotes() {
  const [quote, setQuote] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    setIsLoading(true);
    setError('');
    setQuote('');
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
        setIsLoading(false);
      })
      .catch((error) => {
        setError(`Error fetching quote: ${error.message}`);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="quotes">Loading...</div>;
  }

  if (error) {
    return <div className="quotes">{error}</div>;
  }

  return (
    <div className="quotes">
      <h1>{quote}</h1>
    </div>
  );
}

export default Quotes;
