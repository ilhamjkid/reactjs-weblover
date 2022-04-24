import React, { useEffect, useState } from "react";
import "../styles/Review.css";

const Reviews = [
  {
    name: "Mamah Yor Briar",
    message: "Adminnya sangat ganteng. Aku jadi jatuh cinta sama dia",
    AOSName: "fade-right",
    AOSDuration: "800",
    AOSDelay: "0",
  },
  {
    name: "Jeanne D'Arc",
    message: "Pelayanan ramah sekali. minta ini itu masih aja dituruti",
    AOSName: "fade-left",
    AOSDuration: "1000",
    AOSDelay: "0",
  },
  {
    name: "Shinobu Kochou",
    message: "Websitenya sangat bagus. pelayanannya sangat ramah",
    AOSName: "fade-right",
    AOSDuration: "1000",
    AOSDelay: "150",
  },
  {
    name: "Tokisaki Kurumi",
    message: "Websitenya gurih, maknyus. cocok ikut Lomba MasterChef",
    AOSName: "fade-left",
    AOSDuration: "1200",
    AOSDelay: "150",
  },
];
const Review = () => {
  const [getReviews, setReviews] = useState([]);
  useEffect(() => {
    showReviews();
  }, []);
  const showReviews = () => {
    setReviews(Reviews);
  };
  return (
    <section id="review">
      <div className="container">
        <div className="row">
          <div className="col">
            <img className="imgReview" src="/images/IMG-Review.svg" alt="Foto Tinjauan" />
          </div>
          <div className="col">
            {getReviews.map((review, index) => {
              return (
                <div key={index} className="card" data-aos={review.AOSName} data-aos-duration={review.AOSDuration} data-aos-delay={review.AOSDelay}>
                  <div className="glass">
                    <h4>{review.message}</h4>
                    <h2>{review.name}</h2>
                    <div className="rate">
                      <img src="/images/Stars.svg" alt="Bintang" />
                      <img src="/images/Stars.svg" alt="Bintang" />
                      <img src="/images/Stars.svg" alt="Bintang" />
                      <img src="/images/Stars.svg" alt="Bintang" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
