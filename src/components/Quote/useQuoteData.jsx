import { useState, useEffect } from 'react';

function useQuoteData() {
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

  return { data, loading, error };
}

export default useQuoteData;
