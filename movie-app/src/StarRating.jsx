import React from "react";
function StarRating({ rating }) {
  const totalStars = 5;
  const stars = [];
  for (let i = 1; i <= totalStars; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <span key={i} style={{ color: "#f5a623", fontSize: "18px" }}>★</span>
      );
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(
        <span key={i} style={{ color: "#f5a623", fontSize: "18px", opacity: 0.5 }}>★</span>
      );
    } else {
      stars.push(
        <span key={i} style={{ color: "#ddd", fontSize: "18px" }}>★</span>
      );
    }
  }
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
      {stars}
      <span style={{ marginLeft: "6px", fontSize: "13px", color: "#666" }}>
        ({rating} / 5)
      </span>
    </div>
  );
}
export default StarRating;
