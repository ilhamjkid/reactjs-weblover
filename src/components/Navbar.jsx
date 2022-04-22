import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const showNavbar = () => {
    const navbarMenu = document.querySelector("#navbarMenu");
    navbarMenu.classList.toggle("show");
  };
  const hideNavbar = () => {
    const navbarMenu = document.querySelector("#navbarMenu");
    navbarMenu.classList.remove("show");
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
            <a href="#home" className="navbarLink" onClick={hideNavbar}>
              Beranda
            </a>
            <a href="#about" className="navbarLink" onClick={hideNavbar}>
              Tentang
            </a>
            <a href="#product" className="navbarLink" onClick={hideNavbar}>
              Produk
            </a>
            <a href="#review" className="navbarLink" onClick={hideNavbar}>
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
