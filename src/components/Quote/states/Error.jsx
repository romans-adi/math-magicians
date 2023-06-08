import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Error({ error }) {
  return (
    <p>
      Error:
      {error}
    </p>
  );
}

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;
