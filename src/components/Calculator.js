import React, { useState } from "react";
import ButtonsContainer from "./ButtonsContainer";
import Screen from "./Screen";
import { evaluate, round } from "mathjs";

const Calculator = () => {
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "+", "-", "*", "/"];
  const operators = ["/", "+", "-", "*", "."];
  const [screenExpression, setScreenExpression] = useState("");
  const [isAfterResult, setIsAfterResult] = useState(false);

  const updateScreen = (value) => {
    if (
      (operators.includes(value) && screenExpression === "" && value !== "-") ||
      (operators.includes(value) &&
        operators.includes(screenExpression.slice(-1)))
    ) {
      return;
    }
    if (!operators.includes(value) && screenExpression.slice(-1) === "0") {
      return;
    }
    if (screenExpression.length > 10) {
      alert("You've reached maximum expression length!");
      return;
    }
    if (isAfterResult && !operators.includes(value)) {
      return;
    }
    if (screenExpression.includes(".") && value === ".") {
      return;
    }

    setIsAfterResult(false);
    setScreenExpression(screenExpression + value);
  };

  const displayResult = () => {
    if (screenExpression.length === 0) {
      return;
    }
    if (
      screenExpression.slice(-2, -1) === "/" &&
      screenExpression.slice(-1) === "0"
    ) {
      alert("Cannot divide by zero!");
      return;
    }
    let result = evaluate(screenExpression).toString();
    setScreenExpression(round(result, 4).toString());
    setIsAfterResult(true);
  };

  const deleteDisplay = () => {
    setScreenExpression("");
    setIsAfterResult(false);
  };

  return (
    <div className="calculator-container">
      <Screen screenExpression={screenExpression || "0"} />
      <ButtonsContainer values={values} updateScreen={updateScreen} />
      <div className="c-eq-btns">
        <button className="equals-btn btn" onClick={displayResult}>
          =
        </button>
        <button className="clear-btn btn" onClick={deleteDisplay}>
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
