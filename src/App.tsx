import React from "react";

import { ToastContainer } from "react-toastify";

import Router from "./routes";

import { GlobalStyle } from "./styles/reset";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
