import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const customStyle = {
  color: "red",
  fontSize: "100px",
  border: "1px solid black",
};
root.render(
  <d>
    <h1 style={customStyle}>Foods List</h1>
  </d>
);
