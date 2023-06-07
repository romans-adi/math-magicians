import React from "react";
import useCalculatorState from "./useCalcState";
import ButtonCalc from "./ButtonCalc/ButtonCalc";
import './Calculator.scss';

function Calculator() {
  const [currentState, buttonHandler] = useCalculatorState();
  const calculatorSectionWidth = {
    width: "100%",
  }


  return (
      <section style={calculatorSectionWidth} id="calculator">
      <div className="container-calculator">
      <h1 className="calculator-heading">Let's do some math!</h1>
    <div className="calculator">
      <div className="result">
        {currentState.next || currentState.total || "0"}
      </div>
      <ButtonCalc color="grey" onClick={() => buttonHandler("AC")}>
        AC
      </ButtonCalc>
      <ButtonCalc color="grey" onClick={() => buttonHandler("+/-")}>
        +/-
      </ButtonCalc>
      <ButtonCalc color="grey" onClick={() => buttonHandler("%")}>
        %
      </ButtonCalc>
      <ButtonCalc color="orange" onClick={() => buttonHandler("÷")}>
        ÷
      </ButtonCalc>
      <ButtonCalc color="grey" onClick={() => buttonHandler("7")}>
        7
      </ButtonCalc>
      <ButtonCalc color="grey" onClick={() => buttonHandler("8")}>
        8
      </ButtonCalc>
      <ButtonCalc color="grey" onClick={() => buttonHandler("9")}>
        9
      </ButtonCalc>
      <ButtonCalc color="orange" onClick={() => buttonHandler("x")}>
        x
      </ButtonCalc>
      <ButtonCalc color="grey" onClick={() => buttonHandler("4")}>
        4
      </ButtonCalc>
      <ButtonCalc color="grey" onClick={() => buttonHandler("5")}>
        5
      </ButtonCalc>
      <ButtonCalc color="grey" onClick={() => buttonHandler("6")}>
        6
      </ButtonCalc>
      <ButtonCalc color="orange" onClick={() => buttonHandler("-")}>
        -
      </ButtonCalc>
      <ButtonCalc color="grey" onClick={() => buttonHandler("1")}>
        1
      </ButtonCalc>
      <ButtonCalc color="grey" onClick={() => buttonHandler("2")}>
        2
      </ButtonCalc>
      <ButtonCalc color="grey" onClick={() => buttonHandler("3")}>
        3
      </ButtonCalc>
      <ButtonCalc color="orange" onClick={() => buttonHandler("+")}>
        +
      </ButtonCalc>
      <ButtonCalc
        color="grey"
        className="zero"
        onClick={() => buttonHandler("0")}
      >
        0
      </ButtonCalc>
      <ButtonCalc color="grey" onClick={() => buttonHandler(".")}>
        .
      </ButtonCalc>
      <ButtonCalc color="orange" onClick={() => buttonHandler("=")}>
        =
      </ButtonCalc>
      </div>
      </div>
      </section>
  );
}

export default Calculator;
