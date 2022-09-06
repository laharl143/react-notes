import React from "react";
import ReactDOM from "react-dom";

const name = "Erskine";
const number = "7";

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>                    //you can add any javascript "expression" inside a curly bracket, but not javascript statement. expression is something that gives a value while statement asks the computer to do some work
    <p>Your lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);


