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
      <span className="quote-author">
        {' '}
        -
        {' '}
        {data[0].author}
      </span>
    </blockquote>
  );
}

export default Quote;
