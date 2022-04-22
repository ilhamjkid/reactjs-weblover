import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Semua Bisa Diatur</h1>
            <h4>Kami menyediakan jasa pembuatan website yang dapat disesuaikan dengan keinginan Pelanggan</h4>
            <div className="downloadCatalog">
              <a href="https://weblover.netlify.app">Unduh Katolog</a>
            </div>
          </div>
          <div className="col">
            <img src="/images/IMG-Tentang.svg" alt="Foto Tentang Kami" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
