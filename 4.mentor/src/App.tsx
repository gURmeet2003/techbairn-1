import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Login from "./components/main/login/Login";
import Enroll from "./components/mentor/enroll/Enroll";
import Mentor from "./components/mentor/Mentor";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Main/> */}
      <Mentor />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
