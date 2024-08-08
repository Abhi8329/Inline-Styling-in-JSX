//Inline Css
import React from "react";
import ReactDOM from "react-dom";

const customStyle1 = {
  color: "red",
  fontSize: "30px",
  fontFamily: "Times New Roman",
  border: "5px solid black",
};

const customStyle2 = {
  color: "blue",
  fontFamily: "Arial",
  fontSize: "15px",
};

ReactDOM.render(
  <div>
    <h1 style={customStyle1}>Let's Talk About Reactjs! </h1>
    <p style={customStyle2}>
      React is a framework that employs Webpack to automatically compile React,
      JSX, and ES6 code while handling CSS file prefixes. React is a
      JavaScript-based UI development library. Although React is a library
      rather than a language, it is widely used in web development. The library
      first appeared in May 2013 and is now one of the most commonly used
      frontend libraries for web development.
    </p>
    <p style={customStyle2}>
      React offers various extensions for entire application architectural
      support, such as Flux and React Native, beyond mere UI.
    </p>
  </div>,
  document.getElementById("root")
);
