import React from 'react';
import PropTypes from 'prop-types';
import './ButtonCalc.scss';

function ButtonCalc({
  onClick, children, color, className,
}) {
  const buttonClassName = `btn btn-${color} ${className}`;

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
  className: PropTypes.string,
};

ButtonCalc.defaultProps = {
  className: '',
};

export default ButtonCalc;
