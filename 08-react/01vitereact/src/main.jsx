import React from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";

// function MyApp() {
//   return (
//     <>
//       <h1>custome react app</h1>
//     </>
//   );
// }

// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Click me to visit google
//   </a>
// );

const areactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me",
);

createRoot(document.getElementById("root")).render(areactElement);
