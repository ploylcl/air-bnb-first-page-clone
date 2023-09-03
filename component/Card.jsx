import React from "react";

export default function Card(probs) {
  return (
      <section className="all-card">
        <div className="card">
            <div className="card-image">
            <img src={probs.coverImg} />
            </div>
            <div className="rating">
                <img src="./public/img/Star 1.png" />
                <span className="gray">{probs.rating} {probs.reviewCount} •</span>
                <span className="gray"> {probs.country}</span>
            <div className="detail">
                <p>{probs.title}</p>
                <p><span className="price" >From ${probs.price}</span> /person</p>
            </div>
            </div>
        </div>
      </section>
  );
}
