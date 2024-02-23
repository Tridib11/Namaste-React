const heading = React.createElement(
  "h1",
  { id: "heading" },//Attribute
  "Hello world from react!"
);
console.log(heading);
//everythinng that we will do we will do inside the root so ReactDOM.createRoot()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
