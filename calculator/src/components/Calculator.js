import React, { useState } from "react";
import "./Calculator.css";
// Final Item.... Operator Chain
export default function Calculator() {
  const [state, setState] = useState({
    input: "",
    operator: "",
    output: "",
  });
  const handleNumber = (e) => {
    // let checkDecimal = state.input.split("");
    let newInput = state.input + e.target.innerText;
    if (state.input.includes(".") && e.target.innerText === ".") {
      newInput = state.input;
    }
    if (newInput == "00") {
      newInput = "0";
    }
    console.log(e.target.innerText);
    // Use parseFloat to convert this string to nubmer.
    setState({ ...state, input: newInput });
  };
  const handleOperator = (e) => {
    // Here we will handle the operator
    if (e.target.innerText === "AC") {
      setState({ input: "", output: "", operator: "" });
    } else if (!state.output) {
      //if state.output is empty then we shall update output equal to input and set input to empty string.
      let newOutput = state.input;
      setState({
        ...state,
        output: newOutput,
        input: "",
        operator: e.target.innerText,
        negate: false,
      });
    } else {
      // We will just update the operator.
      if (state.input !== "") {
        handleCalculate((innerState) => {
          console.log(innerState);
          setState({ ...innerState, operator: e.target.innerText });
        });
      } else {
        if(e.target.innerText === "-" && state.input == "" && state.operator !== "" && state.output !== "" ){
          setState({ ...state, input: "", output: `-${state.output}`, negate: true});
        }else{
          if(state.negate === true){
            setState({ ...state, operator: e.target.innerText, input: "", output: `${state.output*-1}` });
          }else{
            setState({ ...state, operator: e.target.innerText, input: "" });
          }
        }
      }
    }
  };
  const handleCalculate = (setOperator) => {
    // When the user clicks equals to we shall do the calculation.
    let innerState = {};
    switch (state.operator) {
      case "+":
        let sum = parseFloat(state.output) + parseFloat(state.input);
        innerState = { ...state, output: sum, input: "" };
        setState(innerState);
        break;
      case "-":
        let sub = parseFloat(state.output) - parseFloat(state.input);
        innerState = { ...state, output: sub, input: "" };
        setState(innerState);
        break;
      case "X":
        let mul = parseFloat(state.output) * parseFloat(state.input);
        innerState = { ...state, output: mul, input: "" };
        setState(innerState);
        break;
      case "/":
        let div = parseFloat(state.output) / parseFloat(state.input);
        innerState = { ...state, output: div, input: "" };
        setState(innerState);
        break;
      default:
        break;
    }
    if (setOperator instanceof Function) {
      setOperator(innerState);
    }
  };
  return (
    <div>
      <div id="display">
        {/* Div to display INPUT and OUTPUt */}
        {state.output || state.input || 0}
      </div>
      <div className="btnContainer">
        <button
          onClick={handleOperator}
          className="function doubleSize"
          id="clear"
        >
          AC
        </button>
        <button onClick={handleOperator} className="function" id="divide">
          /
        </button>
        <button onClick={handleOperator} className="function" id="multiply">
          X
        </button>
        <button onClick={handleNumber} className="function" id="seven">
          7
        </button>
        <button onClick={handleNumber} className="function" id="eight">
          8
        </button>
        <button onClick={handleNumber} className="function" id="nine">
          9
        </button>
        <button onClick={handleOperator} className="function" id="subtract">
          -
        </button>
        <button onClick={handleNumber} className="function" id="four">
          4
        </button>
        <button onClick={handleNumber} className="function" id="five">
          5
        </button>
        <button onClick={handleNumber} className="function" id="six">
          6
        </button>
        <button onClick={handleOperator} className="function" id="add">
          +
        </button>
        <button onClick={handleNumber} className="function" id="one">
          1
        </button>
        <button onClick={handleNumber} className="function" id="two">
          2
        </button>
        <button onClick={handleNumber} className="function" id="three">
          3
        </button>
        <button
          onClick={handleCalculate}
          className="function vertical"
          id="equals"
        >
          =
        </button>
        <button
          onClick={handleNumber}
          className="function doubleSize"
          id="zero"
        >
          0
        </button>
        <button onClick={handleNumber} className="function" id="decimal">
          .
        </button>
      </div>
    </div>
  );
}
