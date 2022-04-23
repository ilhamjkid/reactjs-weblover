import React from "react";
import About from "./components/About";
import Home from "./components/Home";

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
      <button type="button" className="backToTop" onClick={scrollInto}>
        <span>▲</span>
      </button>
    </>
  );
};

export default App;
