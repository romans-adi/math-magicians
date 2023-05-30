import React from 'react';

function Calculator() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="result">0</div>
        <div className="btn btn-grey">AC</div>
        <div className="btn btn-grey">+/-</div>
        <div className="btn btn-grey">%</div>
        <div className="btn btn-orange">÷</div>
        <div className="btn btn-grey">7</div>
        <div className="btn btn-grey">8</div>
        <div className="btn btn-grey">9</div>
        <div className="btn btn-orange">×</div>
        <div className="btn btn-grey">4</div>
        <div className="btn btn-grey">5</div>
        <div className="btn btn-grey">6</div>
        <div className="btn btn-orange">-</div>
        <div className="btn btn-grey">1</div>
        <div className="btn btn-grey">2</div>
        <div className="btn btn-grey">3</div>
        <div className="btn btn-orange">+</div>
        <div className="btn btn-grey zero">0</div>
        <div className="btn btn-grey">.</div>
        <div className="btn btn-orange">=</div>
      </div>
    </div>
  );
}

export default Calculator;
