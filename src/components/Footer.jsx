import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const scrollInto = (view, element) => {
    element.preventDefault();
    const navbarMenu = document.querySelector("#navbarMenu");
    const sections = document.querySelectorAll("section");
    navbarMenu.classList.remove("show");
    sections[view].scrollIntoView();
  };
  return (
    <footer id="footer">
      <div className="footerChild">
        <div className="container">
          <div className="row">
            <div className="col">
              <img className="code" src="/images/IMG-Footer-Code.svg" alt="Foto Code" />
              <h4 className="desc">Jasa Pembuatan Website Terbaik Di Sidoarjo, Jawa Timur, Indonesia</h4>
              <div className="sosmed">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="/images/Instagram.svg" alt="Instagram" />
                </a>
                <a href="https://web.telegram.org" target="_blank" rel="noopener noreferrer">
                  <img src="/images/Telegram.svg" alt="Telegram" />
                </a>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                  <img src="/images/WhatsApp.svg" alt="WhatsApp" />
                </a>
              </div>
            </div>
            <div className="col">
              <h2 className="headInfo">Informasi</h2>
              <ul className="footerNavbar">
                <li onClick={(e) => scrollInto(0, e)}>Beranda</li>
                <li onClick={(e) => scrollInto(1, e)}>Tentang Kami</li>
                <li onClick={(e) => scrollInto(2, e)}>Produk</li>
                <li onClick={(e) => scrollInto(3, e)}>Tinjauan</li>
              </ul>
            </div>
            <div className="col">
              <h2 className="more">Selengkapnya</h2>
              <ul className="info">
                <li>
                  <img src="/images/Location.svg" alt="Location" />
                  <span>Sidoarjo, Jawa Timur, Indonesia</span>
                </li>
                <li>
                  <img src="/images/Phone.svg" alt="Phone" />
                  <span>+62 812 1702 2004</span>
                </li>
                <li>
                  <img src="/images/Email.svg" alt="Email" />
                  <span>email@weblover.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
