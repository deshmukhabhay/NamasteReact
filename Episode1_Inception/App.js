{
  /* <div id="root">
  <div id="parent">
    <div id="child1">
      <h1 id="heading">Hello from ReactJS!</h1>
      <h2 id="heading">Heading 2!</h2>
    </div>
    <div id="child2">
      <h1 id="heading">Hello from ReactJS!</h1>
      <h2 id="heading">Heading 2!</h2>
    </div>
  </div>
</div>; */
}

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "Hello from ReactJS!"),
    React.createElement("h2", { id: "heading" }, "Heading 2!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "Hello from ReactJS!"),
    React.createElement("h2", { id: "heading" }, "Heading 2!"),
  ]),
]);
console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);
root.render(heading);
