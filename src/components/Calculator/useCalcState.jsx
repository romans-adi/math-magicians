import { useState } from "react";
import calculate from "./logic/calculate";

function useCalculatorState() {
  const [currentState, setCurrentState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const buttonHandler = (buttonName) => {
    setCurrentState(calculate(currentState, buttonName));
  };

  return [currentState, buttonHandler];
}

export default useCalculatorState;
