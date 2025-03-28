import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },[
    React.createElement("div",{ id: "child1" },[
    React.createElement("h1",{ id: "sibling1" },"Hi this is h1 element"),
    React.createElement("h2",{ id: "sibling2" },"Hi this is h2 element, sibling of h1")
  ]
    ),
    React.createElement("div",{ id: "child2" },[
    React.createElement("h3",{ id: "sibling3" },"Hi this is h3 element"),
    React.createElement("h4",{ id: "sibling4" },"Hi this is h4 element, sibling of h3")
   ])
  ]
);

console.log(parent);

const parentRoot = ReactDOM.createRoot(document.getElementById("root"));

parentRoot.render(parent);


//create a nested structure as below


  /* 
<div id:"parent">

<div id:"child 1">

<h1 id:"sibling1">Hi this is h1 element</h1>

<h2 id:"sibling2">Hi this is h2 element, sibling of h1 </h2>

</div>

<div id:"child 2">

<h3 id:"sibling3">Hi this is h3 element</h3>

<h4 id:"sibling4">Hi this is h4 element, sibling of h4 </h4>

</div>

</div > 
*/
