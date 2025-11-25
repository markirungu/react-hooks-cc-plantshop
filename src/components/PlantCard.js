import React, { useState } from "react";

function PlantCard({ plant, onUpdatePlant }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  function handleSoldOut() {
    const updatedSoldOutStatus = !isSoldOut;
    setIsSoldOut(updatedSoldOutStatus);
    
    // Update the plant with sold out status
    const updatedPlant = { ...plant, soldOut: updatedSoldOutStatus };
    onUpdatePlant(updatedPlant);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
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