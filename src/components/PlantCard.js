import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  function handleToggleSoldOut() {
    setIsSoldOut(!isSoldOut);
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {isSoldOut ? (
        <button className="primary" onClick={handleToggleSoldOut}>
          Sold Out
        </button>
      ) : (
        <button className="primary" onClick={handleToggleSoldOut}>
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;