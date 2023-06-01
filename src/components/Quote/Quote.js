import React, { useState, useEffect } from 'react';

function QuoteDisplay() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers', {
          headers: {
            'X-Api-Key': 'yigrP3QsEMJup5mfLoVtGA==O06LqFR3H9Oex9vq',
          },
        });
        if (!res.ok) {
          throw new Error('Failed to fetch quotes');
        }
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }

  return (
    <div>
      <h2>{data[0].quote}</h2>
      <ul>
        {data.map((quote) => (
          <li key={quote.id}>{quote.author}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuoteDisplay;
