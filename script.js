//first we need to tell react where the root of the application is. for us it is in div id= root
let root = ReactDOM.createRoot(document.getElementById("root"));

//in js we have document.createElement, in react we have React.createElement to create a new element
let headingh1 = React.createElement("h1", { id: "heading" }, "hello world");

//now we tell what we want to render inside the root
root.render(headingh1);

//what is this react.createElement giving us?
console.log(headingh1); // => an objecct with type Symbol(react.element), its type as h1 and children as the content

//creating nested structure inside react

const child1 = React.createElement(
  "h1",
  { id: "child" },
  "hello there i am the child"
);

const child2 = React.createElement(
  "h2",
  { id: "child2" },
  "i am the second child"
);

const parent = React.createElement("div", { id: "parent" }, [child1, child2]);

const grandparent = React.createElement("div", { id: "grand-parent" }, parent);

console.log(grandparent);

root.render(grandparent);

//JSX
