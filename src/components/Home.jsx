import React from "react";
import "../styles/Home.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <section id="home">
      <Navbar />
      <div id="homeHeader" className="container">
        <div className="row">
          <div className="col">
            <img src="/images/IMG-Beranda.svg" alt="Foto Beranda" />
          </div>
          <div className="col">
            <h1>Weblover</h1>
            <h4>Layanan Pembuatan Website</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
