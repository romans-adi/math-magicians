import React from 'react';
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
