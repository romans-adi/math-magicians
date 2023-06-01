import React from 'react';
import useQuoteData from './useQuoteData';
import Loading from './states/loading';
import Error from './states/error';
import './Quote.scss';

function Quote() {
  const { data, loading, error } = useQuoteData();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
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
  );
}

export default Quote;
