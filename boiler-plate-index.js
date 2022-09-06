//codesandbox.io

import React from "react";
import ReactDOM from "react-dom";

const fName = "Erskine";
const lName = "Duenas";
const number = "7";

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>                    //you can add any javascript "expression" inside a curly bracket, but not javascript statement. expression is something that gives a value while statement asks the computer to do some work
    <p>Your lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);


///////////////////////////////////////////////////////////////////////////////

import React from "react";
import ReactDOM from "react-dom";

const yourName = "Erskine Duenas";
const currentDate = new Date();
const year = currentDate.getFullYear();


ReactDOM.render(
  <div>
    <p>Created by {yourName}</p>                   
    <p><i>Copyright {year}</i></p> 
  </div>,
  document.getElementById("root")
);
//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.