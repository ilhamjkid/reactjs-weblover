import React, { useEffect, useState } from "react";
import "../styles/Product.css";

const products = [
  {
    name: "Website Profil Perusahaan",
    image: "IMG-Produk-1.svg",
    alt: "Produk 1",
    AOSName: "fade-right",
    AOSDuration: "800",
    AOSDelay: "0",
  },
  {
    name: "Website Blog Pribadi",
    image: "IMG-Produk-2.svg",
    alt: "Produk 2",
    AOSName: "fade-left",
    AOSDuration: "1000",
    AOSDelay: "0",
  },
  {
    name: "Website Perpustakaan",
    image: "IMG-Produk-3.svg",
    alt: "Produk 3",
    AOSName: "fade-right",
    AOSDuration: "1000",
    AOSDelay: "150",
  },
  {
    name: "Website Toko Online",
    image: "IMG-Produk-4.svg",
    alt: "Produk 4",
    AOSName: "fade-left",
    AOSDuration: "1200",
    AOSDelay: "150",
  },
];
const Product = () => {
  const [getProducts, setProducts] = useState([]);
  useEffect(() => {
    showProducts();
  }, []);
  const showProducts = () => {
    setProducts(products);
  };
  return (
    <section id="product">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Produk</h1>
          </div>
          {getProducts.map((product, index) => {
            return (
              <div key={index} className="col" data-aos={product.AOSName} data-aos-duration={product.AOSDuration} data-aos-delay={product.AOSDelay}>
                <div className="card">
                  <div className="glass">
                    <h4>{product.name}</h4>
                    <img src={`/images/${product.image}`} alt={product.alt} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Product;
