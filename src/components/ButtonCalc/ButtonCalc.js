import React from 'react';
import PropTypes from 'prop-types';
import './ButtonCalc.scss';

function ButtonCalc({ onClick, children, color }) {
  const buttonClassName = `btn btn-${color}`;

  return (
    <button type="button" className={buttonClassName} onClick={() => onClick()}>
      {children}
    </button>
  );
}

ButtonCalc.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

export default ButtonCalc;
