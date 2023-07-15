import React, { useState, useEffect } from 'react';

function FetchQuote() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://api.api-ninjas.com/v1/quotes?category=success',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': 'h51HAduSmK3j8nDhJsGZ7g==UOrxjLtOdw50QXKB',
          },
        },
      );
      const responseData = await response.json();
      if (response.ok) {
        setIsLoading(false);
        setError(false);
        setData(responseData[0]);
      } else {
        setIsLoading(false);
        setError(responseData);
      }
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <div className="quote-container">Loading...</div>;

  if (error) return <div className="quote-container">Something went wrong!</div>;

  if (data) {
    return (
      <div className="quote-container">
        <p className="quote">
          &quot;
          {data.quote}
          &quot;
        </p>
      </div>
    );
  }
}

export default FetchQuote;
