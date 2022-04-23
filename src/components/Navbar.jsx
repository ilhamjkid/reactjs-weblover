import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const showNavbar = () => {
    const navbarMenu = document.querySelector("#navbarMenu");
    navbarMenu.classList.toggle("show");
  };
  const scrollInto = (view, element) => {
    element.preventDefault();
    const navbarMenu = document.querySelector("#navbarMenu");
    const sections = document.querySelectorAll("section");
    navbarMenu.classList.remove("show");
    sections[view].scrollIntoView();
  };
  return (
    <div id="navbar">
      <div className="container">
        <div id="navbarHead">
          <img src="/images/Logo-Weblover.svg" alt="Logo Weblover" />
          <button type="button" onClick={showNavbar}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
        <div id="navbarMenu">
          <div className="navbarNav">
            <a href="#home" className="navbarLink" onClick={(e) => scrollInto(0, e)}>
              Beranda
            </a>
            <a href="#about" className="navbarLink" onClick={(e) => scrollInto(1, e)}>
              Tentang
            </a>
            <a href="#product" className="navbarLink" onClick={(e) => scrollInto(2, e)}>
              Produk
            </a>
            <a href="#review" className="navbarLink" onClick={(e) => scrollInto(3, e)}>
              Review
            </a>
          </div>
          <div className="navbarNavButton">
            <a href="mailto:email@weblover.com" target="_blank" rel="noreferrer">
              Hubungi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
