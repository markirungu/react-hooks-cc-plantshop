import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]); // store all plants
  const [searchTerm, setSearchTerm] = useState(""); // store search input

  // Fetch all plants when the component loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // Filter plants based on search input
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add a new plant to the list
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  return (
    <main>
      {/* Form to add a new plant */}
      <NewPlantForm onAddPlant={handleAddPlant} />

      {/* Search bar */}
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {/* List of plants */}
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
