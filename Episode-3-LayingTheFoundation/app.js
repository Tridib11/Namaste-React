import React from "react";
import ReactDOM from "react-dom/client";

//JSX - HTML-like or XML-like syntax

//JSX(transpiled before it reaches the JS engine) - PARCEL - Babel
const jsxHeading = <h1 id="Heading" className="head">Namaste React using JS</h1>;


//React component
// -> Class Based Component - OLD
// -> Functional Component - NEW



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
