import React from "react";
function StarRating({ rating }) {
  const totalStars = 5;
  const stars = [];
  for (let i = 1; i <= totalStars; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <span key={i} className="star full">★</span>
      );
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(
        <span key={i} className="star half">★</span>
      );
    } else {
      stars.push(
        <span key={i} className="star empty">★</span>
      );
    }
  }
  return (
    <div className="star-row">
      {stars}
      <span className="rating-number">({rating} / 5)</span>
    </div>
  );
}
export default StarRating;
