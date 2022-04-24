import React, { useEffect } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Product from "./components/Product";
import Review from "./components/Review";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const scrollInto = () => {
    const navbarMenu = document.querySelector("#navbarMenu");
    const section = document.querySelectorAll("section")[0];
    navbarMenu.classList.remove("show");
    section.scrollIntoView();
  };
  useEffect(() => {
    AOS.init({ disable: "phone" });
    AOS.refresh();
  }, []);
  return (
    <>
      <Home />
      <About />
      <Product />
      <Review />
      <Footer />
      <button type="button" className="backToTop" onClick={scrollInto}>
        <span>▲</span>
      </button>
    </>
  );
};

export default App;
