import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/main/Main";
import Login from "./components/main/login/Login";
import Programs from "./components/programs/Programs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* <Main/> */}
      <Programs />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
