import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { $textColor } from "./components/const/const";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
body{
  background-color: #0d0724;
  max-height: 100vh;
  overflow: hidden;
}
:root {
  --swiper-pagination-bullet-vertical-gap: 1rem;
  --swiper-theme-color: ${$textColor} !important;
  --swiper-navigation-size: 1.5rem !important;
}
`;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Global />
    <App />
  </>
);
