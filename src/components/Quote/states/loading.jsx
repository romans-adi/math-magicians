import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaSpinner } from 'react-icons/fa';

function Loading() {
  return (
    <p>
      <FaSpinner className="loading-spinner" />
      Loading...
    </p>
  );
}

export default Loading;
