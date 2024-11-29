const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Iam an H1 TAG"),
    React.createElement("h1", {}, "iam an second tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Iam an H1 TAG"),
    React.createElement("h1", {}, "iam an second tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading); // it returns object of heading(h1)

root.render(parent);
