import React from "react";
import About from "./components/About";
import Home from "./components/Home";

const App = () => {
  const hideNavbar = () => {
    const navbarMenu = document.querySelector("#navbarMenu");
    navbarMenu.classList.remove("show");
  };
  return (
    <>
      <Home />
      <About />
      <a href="#home" className="backToTop" onClick={hideNavbar}>
        <span>▲</span>
      </a>
    </>
  );
};

export default App;
