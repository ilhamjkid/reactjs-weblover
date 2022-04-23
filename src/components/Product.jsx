import React from "react";
import "../styles/Product.css";

const Product = () => {
  return (
    <section id="product">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Produk</h1>
          </div>
          <div className="col">
            <div className="card">
              <div className="glass">
                <h4>Website Profil Perusahaan</h4>
                <img src="/images/IMG-Produk-1.svg" alt="Produk 1" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="glass">
                <h4>Website Blog Pribadi</h4>
                <img src="/images/IMG-Produk-2.svg" alt="Produk 2" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="glass">
                <img src="/images/IMG-Produk-3.svg" alt="Produk 3" />
                <h4>Website Perpustakaan</h4>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="glass">
                <img src="/images/IMG-Produk-4.svg" alt="Produk 4" />
                <h4>Website Toko Online</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
