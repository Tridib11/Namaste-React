import React from "react";
import ReactDOM from "react-dom/client";

//JSX - HTML-like or XML-like syntax

//JSX(transpiled before it reaches the JS engine) - PARCEL - Babel

//React element
const Title = <h1 className="head">Namaste React using JS</h1>;
//Component
const TitleComponent = () => <h1 className="head">Namaste React using JS</h1>;

//React component
// -> Class Based Component - OLD
// -> Functional Component - NEW

//React Functional Component


const number = 1000;

const HeadingComponent = () => (
  //This is component composition - Composing two Component into one Aother
  <div id="container">
    {Title}
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

// root.render(jsxHeading);

/*
way to render a functional component
root.render(<HeadingComponent />);
*/
