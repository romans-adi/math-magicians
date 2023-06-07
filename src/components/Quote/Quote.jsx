import React from 'react';
import useQuoteData from './useQuoteData';
import Loading from './states/Loading';
import Error from './states/Error';
import './Quote.scss';

function Quote() {
  const { data, loading, error } = useQuoteData();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (data.length === 0) {
    return null;
  }

  return (
    <div className="container-quote">
      <blockquote className="quote">
        <div className="quote-text">
          &ldquo;
          {data[0].quote}
          &ldquo;
        </div>
        <div className="quote-author">
          {' '}
          -
          {' '}
          {data[0].author}
        </div>
      </blockquote>
    </div>
  );
}

export default Quote;
