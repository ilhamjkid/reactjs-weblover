import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Product from "./components/Product";

const App = () => {
  const scrollInto = () => {
    const navbarMenu = document.querySelector("#navbarMenu");
    const section = document.querySelectorAll("section")[0];
    navbarMenu.classList.remove("show");
    section.scrollIntoView();
  };
  return (
    <>
      <Home />
      <About />
      <Product />
      <button type="button" className="backToTop" onClick={scrollInto}>
        <span>▲</span>
      </button>
    </>
  );
};

export default App;
