import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const lakelist = ["Echo Lake", "Maud Lake", "Cascade Lake"];
function App({ lakes }) {
  return (
    <div>
      <ul>
        {lakes.map((lake) => (
          <li>{lake}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<App lakes={lakelist} />, document.getElementById("root"));
