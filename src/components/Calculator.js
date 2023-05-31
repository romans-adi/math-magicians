import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [currentState, setCurrentState] = useState({ total: null, next: null, operation: null });
  const [currentButtons, setCurrentButtons] = useState([]);

  const buttonHandler = (buttonName) => {
    let newState;

    if (buttonName === '+/-') {
      newState = { ...currentState };

      const toggleSign = (numberString) => {
        if (numberString.charAt(0) === '-') {
          return numberString.slice(1);
        }
        return `-${numberString}`;
      };

      if (newState.next) {
        newState.next = toggleSign(newState.next);
      } else if (newState.total) {
        newState.total = toggleSign(newState.total);
      }

      setCurrentState(newState);
      setCurrentButtons((prevButtons) => {
        const updatedButtons = [...prevButtons];
        const lastIndex = updatedButtons.length - 1;
        updatedButtons[lastIndex] = newState.next || newState.total || '0';
        return updatedButtons;
      });

      return;
    }

    newState = calculate(currentState, buttonName);

    if (typeof newState.total === 'undefined' && buttonName === '=') {
      setCurrentState({ total: null, next: null, operation: null });
      setCurrentButtons([]);
    } else {
      setCurrentState(newState);

      if (buttonName === 'AC') {
        setCurrentButtons([]);
      } else if (buttonName === '=') {
        setCurrentButtons([...currentButtons, buttonName, newState.total]);
      } else {
        setCurrentButtons([...currentButtons, buttonName]);
      }
    }
  };

  const renderButton = (buttonName, className) => (
    <button type="button" className={className} onClick={() => buttonHandler(buttonName)}>
      {buttonName}
    </button>
  );

  return (
    <div className="container">
      <div className="wrapper">
        <div className="result">
          {currentButtons.length > 0 ? currentButtons.join(' ') : '0'}
        </div>
        {renderButton('AC', 'btn btn-grey')}
        {renderButton('+/-', 'btn btn-grey')}
        {renderButton('%', 'btn btn-grey')}
        {renderButton('÷', 'btn btn-orange')}
        {renderButton('7', 'btn btn-grey')}
        {renderButton('8', 'btn btn-grey')}
        {renderButton('9', 'btn btn-grey')}
        {renderButton('x', 'btn btn-orange')}
        {renderButton('4', 'btn btn-grey')}
        {renderButton('5', 'btn btn-grey')}
        {renderButton('6', 'btn btn-grey')}
        {renderButton('-', 'btn btn-orange')}
        {renderButton('1', 'btn btn-grey')}
        {renderButton('2', 'btn btn-grey')}
        {renderButton('3', 'btn btn-grey')}
        {renderButton('+', 'btn btn-orange')}
        {renderButton('0', 'btn btn-grey zero')}
        {renderButton('.', 'btn btn-grey')}
        {renderButton('=', 'btn btn-orange')}
      </div>
    </div>
  );
}

export default Calculator;
