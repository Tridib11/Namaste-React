//Replicating this in React
/*
    <div id="parent">
      <div id="child">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>       
      </div>
      <div id="child2">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>       
      </div>
    </div>
*/
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "This is namaste React"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);
// const heading = React.createElement(
//   "h1",
//   { id: "heading" }, //Attribute
//   "Hello world from react!"
// );
console.log(parent);
//everythinng that we will do we will do inside the root so ReactDOM.createRoot()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
