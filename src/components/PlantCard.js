import React, { useState } from "react";

function PlantCard({ plant, onUpdatePlant }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  function handleSoldOut() {
    const updatedSoldOutStatus = !isSoldOut;
    setIsSoldOut(updatedSoldOutStatus);
    
    const updatedPlant = { ...plant, soldOut: updatedSoldOutStatus };
    onUpdatePlant(updatedPlant);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      {/* REMOVE THE $ SIGN - Tests expect just the number */}
      <p>Price: {plant.price}</p>
      {!isSoldOut ? (
        <button className="primary" onClick={handleSoldOut}>
          In Stock
        </button>
      ) : (
        <button onClick={handleSoldOut}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;